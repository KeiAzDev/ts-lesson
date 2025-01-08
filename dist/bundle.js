(()=>{"use strict";class e{get totalScore(){return n.getInstance().activeElementsScore.reduce(((e,t)=>e+t),0)}render(){document.querySelector(".score__number").textContent=String(this.totalScore)}constructor(){}static getInstance(){return e.instance||(e.instance=new e),e.instance}}class t{constructor(e){this.element=e,e.addEventListener("click",this.clickEventHandler.bind(this))}clickEventHandler(){this.element.classList.toggle("food--active"),e.getInstance().render()}}class n{get activeElements(){return this._activeElements=[],this.elements.forEach((e=>{e.classList.contains("food--active")&&this._activeElements.push(e)})),this._activeElements}get activeElementsScore(){return this._activeElementsScore=[],this.activeElements.forEach((e=>{const t=e.querySelector(".food__score");t&&this._activeElementsScore.push(Number(t.textContent))})),this._activeElementsScore}constructor(){this.elements=document.querySelectorAll(".food"),this._activeElements=[],this._activeElementsScore=[],this.elements.forEach((e=>{new t(e)}))}static getInstance(){return n.instance||(n.instance=new n),n.instance}}n.getInstance()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJtQkFDTyxNQUFNQSxFQUNULGNBQUlDLEdBRUEsT0FEY0MsRUFBTUMsY0FDUEMsb0JBQW9CQyxRQUFPLENBQUNDLEVBQU9DLElBQVVELEVBQVFDLEdBQU8sRUFDN0UsQ0FDQSxNQUFBQyxHQUNJQyxTQUFTQyxjQUFjLGtCQUFrQkMsWUFBY0MsT0FBT0MsS0FBS1osV0FDdkUsQ0FDQSxXQUFBYSxHQUFnQixDQUNoQixrQkFBT1gsR0FJSCxPQUhLSCxFQUFNZSxXQUNQZixFQUFNZSxTQUFXLElBQUlmLEdBRWxCQSxFQUFNZSxRQUNqQixFQ2RHLE1BQU1DLEVBQ1QsV0FBQUYsQ0FBWUcsR0FDUkosS0FBS0ksUUFBVUEsRUFDZkEsRUFBUUMsaUJBQWlCLFFBQVNMLEtBQUtNLGtCQUFrQkMsS0FBS1AsTUFDbEUsQ0FDQSxpQkFBQU0sR0FDSU4sS0FBS0ksUUFBUUksVUFBVUMsT0FBTyxnQkFDaEJ0QixFQUFNRyxjQUNkSyxRQUNWLEVDVEcsTUFBTU4sRUFDVCxrQkFBSXFCLEdBT0EsT0FOQVYsS0FBS1csZ0JBQWtCLEdBQ3ZCWCxLQUFLWSxTQUFTQyxTQUFRVCxJQUNkQSxFQUFRSSxVQUFVTSxTQUFTLGlCQUMzQmQsS0FBS1csZ0JBQWdCSSxLQUFLWCxFQUM5QixJQUVHSixLQUFLVyxlQUNoQixDQUNBLHVCQUFJcEIsR0FRQSxPQVBBUyxLQUFLZ0IscUJBQXVCLEdBQzVCaEIsS0FBS1UsZUFBZUcsU0FBUVQsSUFDeEIsTUFBTWEsRUFBWWIsRUFBUVAsY0FBYyxnQkFDcENvQixHQUNBakIsS0FBS2dCLHFCQUFxQkQsS0FBS0csT0FBT0QsRUFBVW5CLGFBQ3BELElBRUdFLEtBQUtnQixvQkFDaEIsQ0FDQSxXQUFBZixHQUNJRCxLQUFLWSxTQUFXaEIsU0FBU3VCLGlCQUFpQixTQUMxQ25CLEtBQUtXLGdCQUFrQixHQUN2QlgsS0FBS2dCLHFCQUF1QixHQUM1QmhCLEtBQUtZLFNBQVNDLFNBQVFULElBQ2xCLElBQUlELEVBQUtDLEVBQVEsR0FFekIsQ0FDQSxrQkFBT2QsR0FJSCxPQUhLRCxFQUFNYSxXQUNQYixFQUFNYSxTQUFXLElBQUliLEdBRWxCQSxFQUFNYSxRQUNqQixFQ2pDSmIsRUFBTUMsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtbGVzc29uLy4vc3JjL2Zvb2QtYXBwL3Njb3JlLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtbGVzc29uLy4vc3JjL2Zvb2QtYXBwL2Zvb2QudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1sZXNzb24vLi9zcmMvZm9vZC1hcHAvZm9vZHMudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1sZXNzb24vLi9zcmMvZm9vZC1hcHAvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb29kcyB9IGZyb20gXCIuL2Zvb2RzXCI7XG5leHBvcnQgY2xhc3MgU2NvcmUge1xuICAgIGdldCB0b3RhbFNjb3JlKCkge1xuICAgICAgICBjb25zdCBmb29kcyA9IEZvb2RzLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHJldHVybiBmb29kcy5hY3RpdmVFbGVtZW50c1Njb3JlLnJlZHVjZSgodG90YWwsIHNjb3JlKSA9PiB0b3RhbCArIHNjb3JlLCAwKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfX251bWJlcicpLnRleHRDb250ZW50ID0gU3RyaW5nKHRoaXMudG90YWxTY29yZSk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIVNjb3JlLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBTY29yZS5pbnN0YW5jZSA9IG5ldyBTY29yZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTY29yZS5pbnN0YW5jZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTY29yZSB9IGZyb20gXCIuL3Njb3JlXCI7XG5leHBvcnQgY2xhc3MgRm9vZCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0V2ZW50SGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgY2xpY2tFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdmb29kLS1hY3RpdmUnKTtcbiAgICAgICAgY29uc3Qgc2NvcmUgPSBTY29yZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBzY29yZS5yZW5kZXIoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGb29kIH0gZnJvbSBcIi4vZm9vZFwiO1xuZXhwb3J0IGNsYXNzIEZvb2RzIHtcbiAgICBnZXQgYWN0aXZlRWxlbWVudHMoKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZm9vZC0tYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUVsZW1lbnRzO1xuICAgIH1cbiAgICBnZXQgYWN0aXZlRWxlbWVudHNTY29yZSgpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHNTY29yZSA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb29kU2NvcmUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb29kX19zY29yZScpO1xuICAgICAgICAgICAgaWYgKGZvb2RTY29yZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzU2NvcmUucHVzaChOdW1iZXIoZm9vZFNjb3JlLnRleHRDb250ZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlRWxlbWVudHNTY29yZTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9vZCcpO1xuICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50c1Njb3JlID0gW107XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIG5ldyBGb29kKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIUZvb2RzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBGb29kcy5pbnN0YW5jZSA9IG5ldyBGb29kcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBGb29kcy5pbnN0YW5jZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGb29kcyB9IGZyb20gXCIuL2Zvb2RzXCI7XG5Gb29kcy5nZXRJbnN0YW5jZSgpO1xuIl0sIm5hbWVzIjpbIlNjb3JlIiwidG90YWxTY29yZSIsIkZvb2RzIiwiZ2V0SW5zdGFuY2UiLCJhY3RpdmVFbGVtZW50c1Njb3JlIiwicmVkdWNlIiwidG90YWwiLCJzY29yZSIsInJlbmRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiU3RyaW5nIiwidGhpcyIsImNvbnN0cnVjdG9yIiwiaW5zdGFuY2UiLCJGb29kIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja0V2ZW50SGFuZGxlciIsImJpbmQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhY3RpdmVFbGVtZW50cyIsIl9hY3RpdmVFbGVtZW50cyIsImVsZW1lbnRzIiwiZm9yRWFjaCIsImNvbnRhaW5zIiwicHVzaCIsIl9hY3RpdmVFbGVtZW50c1Njb3JlIiwiZm9vZFNjb3JlIiwiTnVtYmVyIiwicXVlcnlTZWxlY3RvckFsbCJdLCJzb3VyY2VSb290IjoiIn0=