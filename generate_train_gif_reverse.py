"""
Generate a 10-second GIF showing train wagons moving from left to right.
Each second the train slides one wagon to the right with a counter at the bottom.
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Configuration
WIDTH = 800
HEIGHT = 400
BACKGROUND_COLOR = (240, 240, 240)  # Light gray
WHEEL_COLOR = (40, 40, 40)  # Dark gray
TEXT_COLOR = (0, 0, 0)  # Black
RAIL_COLOR = (80, 80, 80)  # Gray

# Color palette for wagons (30 different colors) - reversed order for left-to-right movement
WAGON_COLORS = [
    (80, 160, 120),  # Sea green
    (120, 80, 160),  # Deep purple
    (180, 100, 140), # Rose
    (180, 180, 100), # Khaki
    (100, 180, 180), # Aqua
    (160, 100, 180), # Lavender
    (200, 160, 80),  # Sandy
    (100, 180, 100), # Light green
    (80, 80, 200),   # Light blue
    (200, 80, 80),   # Light red
    (80, 160, 140),  # Mint
    (140, 80, 160),  # Violet
    (160, 140, 80),  # Olive
    (80, 140, 160),  # Sky blue
    (160, 80, 120),  # Mauve
    (60, 160, 80),   # Emerald
    (140, 60, 80),   # Maroon
    (180, 140, 60),  # Gold
    (80, 100, 180),  # Royal blue
    (200, 100, 60),  # Coral
    (60, 140, 100),  # Teal
    (100, 60, 140),  # Dark purple
    (180, 60, 120),  # Pink
    (180, 180, 60),  # Yellow
    (60, 180, 180),  # Cyan
    (160, 60, 160),  # Purple
    (180, 120, 60),  # Orange
    (120, 180, 60),  # Green
    (60, 120, 180),  # Blue
    (180, 60, 40),   # Red-brown
]

WAGON_WIDTH = 60
WAGON_HEIGHT = 50
WHEEL_RADIUS = 8
FRAMES_PER_SECOND = 10
TOTAL_SECONDS = 10

def draw_wagon(draw, x, y, wagon_color):
    """Draw a single train wagon at position (x, y) with specified color"""
    # Main wagon body (rectangle)
    draw.rectangle(
        [x, y, x + WAGON_WIDTH, y + WAGON_HEIGHT],
        fill=wagon_color,
        outline=(0, 0, 0),
        width=2
    )
    
    # Wagon roof
    roof_points = [
        (x - 5, y),
        (x + WAGON_WIDTH + 5, y),
        (x + WAGON_WIDTH, y - 10),
        (x, y - 10)
    ]
    draw.polygon(roof_points, fill=wagon_color, outline=(0, 0, 0))
    
    # Windows (two small rectangles)
    window_width = 15
    window_height = 15
    window_y = y + 10
    
    draw.rectangle(
        [x + 10, window_y, x + 10 + window_width, window_y + window_height],
        fill=(200, 220, 255),
        outline=(0, 0, 0),
        width=1
    )
    draw.rectangle(
        [x + 35, window_y, x + 35 + window_width, window_y + window_height],
        fill=(200, 220, 255),
        outline=(0, 0, 0),
        width=1
    )
    
    # Wheels (two circles)
    wheel_y = y + WAGON_HEIGHT + 5
    
    # Left wheel
    draw.ellipse(
        [x + 10 - WHEEL_RADIUS, wheel_y - WHEEL_RADIUS,
         x + 10 + WHEEL_RADIUS, wheel_y + WHEEL_RADIUS],
        fill=WHEEL_COLOR,
        outline=(0, 0, 0),
        width=2
    )
    
    # Right wheel
    draw.ellipse(
        [x + WAGON_WIDTH - 10 - WHEEL_RADIUS, wheel_y - WHEEL_RADIUS,
         x + WAGON_WIDTH - 10 + WHEEL_RADIUS, wheel_y + WHEEL_RADIUS],
        fill=WHEEL_COLOR,
        outline=(0, 0, 0),
        width=2
    )
    
    # Connector (coupling) on the right side
    connector_x = x + WAGON_WIDTH
    connector_y = y + WAGON_HEIGHT // 2
    draw.rectangle(
        [connector_x, connector_y - 3, connector_x + 8, connector_y + 3],
        fill=(60, 60, 60),
        outline=(0, 0, 0),
        width=1
    )

def draw_rails(draw):
    """Draw railroad tracks"""
    rail_y1 = 270
    rail_y2 = 280
    
    # Two horizontal rails
    draw.line([(0, rail_y1), (WIDTH, rail_y1)], fill=RAIL_COLOR, width=3)
    draw.line([(0, rail_y2), (WIDTH, rail_y2)], fill=RAIL_COLOR, width=3)
    
    # Railroad ties (vertical lines)
    for x in range(0, WIDTH, 40):
        draw.rectangle([x - 2, rail_y1 - 5, x + 2, rail_y2 + 5], fill=(100, 70, 40))

def create_frame(second):
    """Create a single frame showing 13 wagons at a time from a 30-wagon train moving LEFT to RIGHT"""
    img = Image.new('RGB', (WIDTH, HEIGHT), BACKGROUND_COLOR)
    draw = ImageDraw.Draw(img)
    
    # Draw sky background (gradient-like effect with light blue)
    sky_color = (135, 206, 235)  # Sky blue
    draw.rectangle([0, 0, WIDTH, 220], fill=sky_color)
    
    # Draw some clouds
    cloud_color = (255, 255, 255)
    # Cloud 1 (left side)
    draw.ellipse([50, 60, 120, 100], fill=cloud_color)
    draw.ellipse([80, 50, 140, 90], fill=cloud_color)
    draw.ellipse([100, 70, 160, 105], fill=cloud_color)
    
    # Cloud 2 (center)
    draw.ellipse([300, 80, 370, 120], fill=cloud_color)
    draw.ellipse([330, 70, 390, 110], fill=cloud_color)
    draw.ellipse([350, 90, 410, 125], fill=cloud_color)
    
    # Cloud 3 (right side)
    draw.ellipse([600, 50, 670, 90], fill=cloud_color)
    draw.ellipse([630, 40, 690, 80], fill=cloud_color)
    draw.ellipse([650, 60, 710, 95], fill=cloud_color)
    
    # Draw grass background (below the rails)
    grass_color = (100, 180, 80)  # Green grass
    draw.rectangle([0, 220, WIDTH, HEIGHT], fill=grass_color)
    
    # Draw rails
    draw_rails(draw)
    
    # 30 wagons total, show 13 at a time (one more on the left)
    # To move left-to-right, we need to start further left and show later wagons
    wagon_y = 200
    spacing = WAGON_WIDTH + 8
    
    # Calculate the offset: Show wagons 0-12, then 1-13, then 2-14, etc.
    # This creates left-to-right movement by changing which wagons are visible
    start_wagon_index = second - 1  # Which wagon to start showing from
    start_x = -20  # Start further to the left to show one more wagon
    
    # Draw 13 consecutive wagons starting from start_wagon_index
    for i in range(13):
        wagon_index = start_wagon_index + i
        if wagon_index < 30:  # Only draw if within our 30-wagon train
            wagon_x = start_x + (i * spacing)
            wagon_color = WAGON_COLORS[wagon_index % len(WAGON_COLORS)]
            draw_wagon(draw, wagon_x, wagon_y, wagon_color)
    
    # Draw second counter at bottom
    try:
        # Try to use a larger font
        font = ImageFont.truetype("arial.ttf", 48)
    except:
        # Fallback to default font
        font = ImageFont.load_default()
    
    counter_text = f"{second}"
    
    # Get text bounding box for centering
    bbox = draw.textbbox((0, 0), counter_text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    text_x = (WIDTH - text_width) // 2+20
    text_y = HEIGHT - text_height - 30
    
    # Draw text with outline for better visibility
    outline_color = (255, 255, 255)
    for offset_x in [-2, 0, 2]:
        for offset_y in [-2, 0, 2]:
            draw.text((text_x + offset_x, text_y + offset_y), counter_text, 
                     fill=outline_color, font=font)
    
    draw.text((text_x, text_y), counter_text, fill=TEXT_COLOR, font=font)
    
    # Draw two vertical lines creating a viewing window
    line_color = (0, 0, 0)  # Black
    line_width = 8
    line_left_x = WIDTH // 2 - 50
    line_right_x = WIDTH // 2 + 88
    line_top_y = 50
    line_bottom_y = HEIGHT - 100
    
    # Left vertical line
    draw.rectangle(
        [line_left_x - line_width // 2, line_top_y, 
         line_left_x + line_width // 2, line_bottom_y],
        fill=line_color
    )
    
    # Right vertical line
    draw.rectangle(
        [line_right_x - line_width // 2, line_top_y, 
         line_right_x + line_width // 2, line_bottom_y],
        fill=line_color
    )
    
    # Draw an eye symbol between the lines (at the top)
    eye_center_x = WIDTH // 2 + 20
    eye_center_y = 140
    eye_width = 60
    eye_height = 35
    
    # Eye outline (almond shape)
    eye_left = eye_center_x - eye_width // 2
    eye_right = eye_center_x + eye_width // 2
    eye_top = eye_center_y - eye_height // 2
    eye_bottom = eye_center_y + eye_height // 2
    
    # Draw eye as an ellipse
    draw.ellipse(
        [eye_left, eye_top, eye_right, eye_bottom],
        fill=(255, 255, 255),
        outline=(0, 0, 0),  # Black
        width=4
    )
    
    # Draw iris (inner circle)
    iris_radius = 12
    draw.ellipse(
        [eye_center_x - iris_radius, eye_center_y - iris_radius,
         eye_center_x + iris_radius, eye_center_y + iris_radius],
        fill=(100, 150, 200),
        outline=(50, 75, 100),
        width=2
    )
    
    # Draw pupil (smallest circle)
    pupil_radius = 6
    draw.ellipse(
        [eye_center_x - pupil_radius, eye_center_y - pupil_radius,
         eye_center_x + pupil_radius, eye_center_y + pupil_radius],
        fill=(20, 20, 20)
    )
    
    return img

def generate_gif():
    """Generate the complete GIF animation"""
    frames = []
    
    print("Generating frames...")
    for second in range(1, TOTAL_SECONDS + 1):
        print(f"  Creating frame for second {second}")
        
        # Create multiple frames per second for smooth display
        frame = create_frame(second)
        
        # Add the same frame multiple times to achieve 1 second duration
        for _ in range(FRAMES_PER_SECOND):
            frames.append(frame.copy())
    
    # Save as GIF
    output_path = "train_animation_reverse.gif"
    print(f"\nSaving GIF to {output_path}...")
    
    frames[0].save(
        output_path,
        save_all=True,
        append_images=frames[1:],
        duration=100,  # 100ms per frame = 10 fps
        loop=0  # Loop forever
    )
    
    print(f"✓ GIF created successfully: {output_path}")
    print(f"  Total frames: {len(frames)}")
    print(f"  Duration: {TOTAL_SECONDS} seconds")
    print(f"  Size: {WIDTH}x{HEIGHT} pixels")

if __name__ == "__main__":
    generate_gif()
