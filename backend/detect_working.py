from ultralytics import YOLO
import cv2

model = YOLO("yolov8n.pt")

cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)

if not cap.isOpened():
    print("Camera not opened")
    exit()

while True:
    ret, frame = cap.read()
    if not ret:
        print("Camera read failed")
        break

    print(frame.shape)
    print(frame.dtype)

    cv2.imshow("Raw Frame", frame)

    results = model(frame, conf=0.15, verbose=False)
    annotated = results[0].plot()
    print(type(annotated))
    print(annotated.shape)
    print(annotated.dtype)

    print("Objects:", len(results[0].boxes))

    cv2.imshow("VisionAssist AI", annotated)

    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

cap.release()
cv2.destroyAllWindows()