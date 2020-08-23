type tfunc = (params: any) => void;

class Eventbus {
  listeners: { [index: string]: tfunc[] } = {};

  $on(event: string, func: tfunc){
    if( this.listeners[event] && this.listeners[event].length){
      this.listeners[event].push(func);
      return;
    }
    this.listeners[event] = [];
    this.listeners[event].push(func);
  }

  $emit(event: string, param?: unknown){
    if(this.listeners[event]){
      this.listeners[event].map( func => func(param));
    }
  }
}


export default new Eventbus();