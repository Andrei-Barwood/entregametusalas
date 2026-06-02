import json
import re

with open('/Users/andreibarwood/entregamelasalas/entregate/index.html', 'r') as f:
    content = f.read()

match = re.search(r'const allCampaigns = (\[.*?\]);', content)
if match:
    campaigns = json.loads(match.group(1))
    for c in campaigns:
        print(f"{c['id']}: {c['title']}")
