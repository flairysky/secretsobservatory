"""
Generate a 10-second GIF showing train wagons appearing one by one.
Each second adds a new wagon with a counter at the bottom.
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

# Color palette for wagons (20 different colors)
WAGON_COLORS = [
    (180, 60, 40),   # Red-brown
    (60, 120, 180),  # Blue
    (120, 180, 60),  # Green
    (180, 120, 60),  # Orange
    (160, 60, 160),  # Purple
    (60, 180, 180),  # Cyan
    (180, 180, 60),  # Yellow
    (180, 60, 120),  # Pink
    (100, 60, 140),  # Dark purple
    (60, 140, 100),  # Teal
    (200, 100, 60),  # Coral
    (80, 100, 180),  # Royal blue
    (180, 140, 60),  # Gold
    (140, 60, 80),   # Maroon
    (60, 160, 80),   # Emerald
    (160, 80, 120),  # Mauve
    (80, 140, 160),  # Sky blue
    (160, 140, 80),  # Olive
    (140, 80, 160),  # Violet
    (80, 160, 140),  # Mint
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
    """Create a single frame showing 10 wagons at a time from a 20-wagon train"""
    img = Image.new('RGB', (WIDTH, HEIGHT), BACKGROUND_COLOR)
    draw = ImageDraw.Draw(img)
    
    # Draw rails
    draw_rails(draw)
    
    # 20 wagons total, show 10 at a time
    # As seconds progress, the train moves right (viewport shifts)
    wagon_y = 200
    spacing = WAGON_WIDTH + 8
    
    # Calculate the offset: train moves right by one wagon width per second
    shift = (second - 1) * spacing
    start_x = 50 - shift
    
    # Draw all 20 wagons, but only the ones in viewport will be visible
    for i in range(20):
        wagon_x = start_x + (i * spacing)
        # Only draw if wagon is in viewport (with some margin)
        if -WAGON_WIDTH < wagon_x < WIDTH:
            wagon_color = WAGON_COLORS[i % len(WAGON_COLORS)]
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
    
    text_x = (WIDTH - text_width) // 2
    text_y = HEIGHT - text_height - 30
    
    # Draw text with outline for better visibility
    outline_color = (255, 255, 255)
    for offset_x in [-2, 0, 2]:
        for offset_y in [-2, 0, 2]:
            draw.text((text_x + offset_x, text_y + offset_y), counter_text, 
                     fill=outline_color, font=font)
    
    draw.text((text_x, text_y), counter_text, fill=TEXT_COLOR, font=font)
    
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
    output_path = "train_animation.gif"
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
