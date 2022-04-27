export abstract class Events{
	public static listeners:any = [{event:'teste', whattodo:[]}]
	public static emit(event:string){
		console.log(event)
		//console.log(Events.listeners)
		let eventObj = Events.listeners.find((e:any) => e.event == event)
		if(eventObj)
			eventObj.whattodo.forEach((ev:any) => {ev()})
	}
	public static when(event:string, whatToDo:any){
		//let l = [{event:'a'},{event:'b'}]
		let el = Events.listeners.find((e:any) => e.event == event)
		if(el){
			el.whattodo.push(whatToDo)
		}else{
			Events.listeners.push({'event':event,whattodo:[whatToDo]})
		}
	}
}