from ultralytics import YOLO

# Load YOLO model only once
model = YOLO("yolov8n.pt")


def detect_objects(frame):
    """
    Detect objects from a frame using YOLOv8
    """

    results = model(frame)

    objects = []

    for result in results:

        for box in result.boxes:

            cls = int(box.cls[0])

            label = model.names[cls]

            x1, y1, x2, y2 = box.xyxy[0].tolist()

            confidence = float(box.conf[0])

            objects.append({
                "label": label,
                "confidence": confidence,
                "box": [x1, y1, x2, y2]
            })

    return objects