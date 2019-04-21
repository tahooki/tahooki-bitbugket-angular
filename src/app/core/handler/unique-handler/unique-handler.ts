export class UniqueHandler {
  static getUniqueStringList(list: string[]): string[] {

    let uniqueList = list.reduce(function(a,b){
      if (a.indexOf(b) < 0 ) a.push(b);
      return a;
    },[]);

    return uniqueList;
  }

  static getUniqueObjectList(list: any[], key: string): any[] {
    let result = [];
    let keyList = [];

    list.forEach(item => {
      if(keyList.indexOf(item[key]) === -1) {
        keyList.push(item[key]);
        result.push(item);
      }
    });

    return result;
  }
}
