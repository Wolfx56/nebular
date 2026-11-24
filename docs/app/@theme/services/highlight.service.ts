import { Injectable } from '@angular/core';
import hljs from 'highlight.js';

@Injectable()
export class NgdHighlightService {
  public highlight(code: string): string {
    return hljs.highlightAuto(code, ['ts', 'html', 'scss', 'nginx']).value;
  }
}
