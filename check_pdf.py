import fitz, sys
sys.stdout.reconfigure(encoding='utf-8')
pdf_path = r'CV antigravity\Prateek generic cv12.pdf'
doc = fitz.open(pdf_path)
print('TOTAL PAGES:', doc.page_count)
for i, page in enumerate(doc):
    blocks = page.get_text('blocks')
    lines = page.get_text('text').strip().split('\n')
    lines = [l.strip() for l in lines if l.strip()]
    max_y = max(b[3] for b in blocks) if blocks else 0
    remaining = page.rect.height - max_y
    first = lines[0][:50] if lines else ''
    last = lines[-1][:50] if lines else ''
    print(f'  Page {i+1}: used={max_y:.0f}/{page.rect.height:.0f}pt  remaining={remaining:.0f}pt')
    print(f'    FIRST: {first}')
    print(f'    LAST:  {last}')
doc.close()
