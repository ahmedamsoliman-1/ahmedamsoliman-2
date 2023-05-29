import zipfile

def zip_file(source_file, output_zip):
    with zipfile.ZipFile(output_zip, 'w') as zipf:
        zipf.write(source_file, arcname=source_file)

# Example usage:
source_file = 'videos.py'
output_zip = 'videos.zip'

zip_file(source_file, output_zip)
