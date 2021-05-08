import os

def create_input():
    image_folder = 'images'
    ims = [os.path.join(image_folder, im) for im in os.listdir(image_folder)]
    
    with open('input.txt', 'w') as f:
        for im in ims:
            f.write(f"file '{im}'\n")
            f.write('duration 5\n')

def create_video():
    os.system('ffmpeg -f concat -i input.txt -vsync vfr -pix_fmt yuv420p output.mp4')

create_input()
create_video()