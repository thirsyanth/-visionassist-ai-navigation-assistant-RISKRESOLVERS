def get_direction(center_x, frame_width):

    if center_x < frame_width / 3:
        return "Left"

    elif center_x < (2 * frame_width / 3):
        return "Center"

    else:
        return "Right"