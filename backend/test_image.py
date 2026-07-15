import importlib
try:
    import cv2  # type: ignore
except ModuleNotFoundError as exc:
    raise ModuleNotFoundError(
        "Package 'opencv-python' is required. Install with `pip install opencv-python` or `pip install opencv-python-headless`."
    ) from exc

try:
    ultralytics = importlib.import_module("ultralytics")
except ModuleNotFoundError as exc:
    raise ModuleNotFoundError(
        "Package 'ultralytics' is required. Install with `pip install ultralytics`."
    ) from exc

YOLO = ultralytics.YOLO
model = YOLO("yolov8n.pt")

img = cv2.imread("test.jpg")

results = model(img)

print(results[0].boxes)