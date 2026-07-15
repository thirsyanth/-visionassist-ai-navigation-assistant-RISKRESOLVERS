import cv2
import threading
import time
from voice import speak

from detect import detect_objects
from direction import get_direction
from distance import estimate_distance
# from voice import speak   # Uncomment after fixing voice.py

# ----------------------------
# Open Webcam
# ----------------------------
camera = cv2.VideoCapture(0, cv2.CAP_DSHOW)

# Set webcam resolution
camera.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
camera.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)

if not camera.isOpened():
    print("Error: Could not open webcam.")
    exit()

# Create resizable window
cv2.namedWindow("VisionAssist - Live Detection", cv2.WINDOW_NORMAL)
cv2.resizeWindow("VisionAssist - Live Detection", 1280, 720)

print("======================================")
print(" VisionAssist Started Successfully ")
print(" Press 'Q' to Quit")
print("======================================")

last_spoken = ""
last_time = 0
while True:

    success, frame = camera.read()

    if not success:
        print("Failed to capture frame.")
        break

    # Resize frame (optional but helps keep display consistent)
    frame = cv2.resize(frame, (1280, 720))

    detections = detect_objects(frame)

    for obj in detections:

        x1, y1, x2, y2 = obj["box"]

        x1 = int(x1)
        y1 = int(y1)
        x2 = int(x2)
        y2 = int(y2)

        label = obj["label"]
        confidence = obj["confidence"]

        # Center of object
        center_x = (x1 + x2) / 2

        # Direction
        direction = get_direction(center_x, frame.shape[1])

        # Distance
        width = x2 - x1
        distance = estimate_distance(width)

        # Uncomment after fixing voice.py
        message = f"{label} {direction} {distance:.1f} meters"
        
        current_time = time.time()

        if message != last_spoken or current_time - last_time > 3:
            threading.Thread(
                target=speak,
                args=(message,),
                daemon=True
            ).start()

            last_spoken = message
            last_time = current_time

        # Draw bounding box
        cv2.rectangle(
            frame,
            (x1, y1),
            (x2, y2),
            (0, 255, 0),
            2
        )

        # Background for text
        # cv2.rectangle(
        #     frame,
        #     (x1, y1 - 80),
        #     (x1 + 260, y1),
        #     (0, 0, 0),
        #     -1
        # )

        # Object name
        cv2.putText(
            frame,
            f"{label}",
            (x1, y1 - 45),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.8,
            (0, 255, 0),
            2
        )

        # Confidence
        cv2.putText(
            frame,
            f"Confidence: {confidence:.2f}",
            (x1, y1 - 25),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.6,
            (0, 255, 255),
            2
        )

        # Direction
        cv2.putText(
            frame,
            f"Direction: {direction}",
            (x1, y1 - 5),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.6,
            (255, 0, 0),
            2
        )

        # Distance
        cv2.putText(
            frame,
            f"Distance: {distance:.2f} m",
            (x1, y2 + 25),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.6,
            (0, 0, 255),
            2
        )

    # Show window
    cv2.imshow("VisionAssist - Live Detection", frame)

    # Quit
    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

camera.release()
cv2.destroyAllWindows()