def estimate_distance(box_width):

    if box_width <= 0:
        return 0

    focal_length = 700
    real_width = 0.5

    distance = (real_width * focal_length) / box_width

    return round(distance, 2)