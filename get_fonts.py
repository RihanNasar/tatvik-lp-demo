import re
with open('scratch3.html', encoding='utf-16') as f:
    html = f.read()

fonts = set(re.findall(r'font-family:\s*([^;\"\}]+)', html, re.I))
print("FONTS FOUND:", fonts)

font_links = re.findall(r'<link[^>]+href=["\']([^"\']+\.(woff|woff2|ttf|otf))["\']', html, re.I)
print("FONT FILES:", font_links)
