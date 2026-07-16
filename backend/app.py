from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np

from detect import detect_objects
from direction import get_direction
from distance import estimate_distance

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "VisionAssist Backend Running"


@app.route("/detect", methods=["POST"])
def detect():

    file = request.files["image"]

    image_bytes = file.read()

    npimg = np.frombuffer(image_bytes, np.uint8)

    frame = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

    detections = detect_objects(frame)

    results = []

    for obj in detections:

        x1, y1, x2, y2 = obj["box"]

        center_x = (x1 + x2) / 2

        direction = get_direction(center_x, frame.shape[1])

        distance = estimate_distance(x2 - x1)

        results.append({
            "label": obj["label"],
            "confidence": obj["confidence"],
            "direction": direction,
            "distance": round(distance, 2),
            "box": obj["box"]
        })

    return jsonify(results)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)