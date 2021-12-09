export class SVGLoader {
  constructor(private path: string = `assets/sprite.mid.svg`) {}

  async loadSVG() {
    const svgRaw = await this.fetchSVG();
    this.appendElement(svgRaw);
    this.populateStorage();
    console.log('svg loaded');
  }

  private fetchSVG() {
    return fetch(this.path).then(response => response.text());
  }

  private appendElement(data: string) {
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerHTML = data;
    document.body.append(div);
  }

  private getSVG() {
    return document.querySelector('svg');
  }

  private populateStorage() {
    const svg = this.getSVG();
    const symbols = svg.children;
    const ids = [];
    Array.from(symbols).forEach(element => {
      ids.push(element.id)
      localStorage.setItem(element.id, element.outerHTML);
    });
    console.log('ids', ids)
  }
}
