import os
import shutil
from pathlib import Path

os.system('npm run build')

for item in os.listdir('dist'):
    s = Path('dist') / item
    d = Path('../src/main/webapp') / item
    shutil.move(s, d)

print("完成")
