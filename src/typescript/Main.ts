///<reference path="audiobus/DrumMachine.ts" />
///<reference path="audiobus/inputs/Microphone.ts" />
///<reference path="audiobus/visualisation/SpectrumAnalyzer.ts" />
class Main 
{
	
	private drums:audiobus.DrumMachine;
	
	static main():void 
	{
		new Main();
	}
	
	constructor(  )
	{
		this.drums = new audiobus.DrumMachine();
		this.drums.trigger();
		this.drums.trigger(1);
		this.drums.trigger(2);
		this.drums.trigger(3);
		this.drums.trigger(4);
		
		// var mic = new audiobus.inputs.Microphone( this.drums.dsp, this.drums.gain );
		// mic.getMic();
		
		var viz = new audiobus.visualisation.SpectrumAnalyzer( this.drums.dsp, this.drums.gain );
		
		// now hook into our analyser for updates
		
		
		// Attach key event
		document.onkeydown = (event) => {
            this.keyListener(event);
        }
	}
	
	private keyListener(e) 
	{
		if (!e)	e = window.event;

		switch( e.keyCode )
		{
			//keyCode 37 is left arrow
			case 37:
				this.drums.trigger(1);
				break;
				
			
		}
		
		if (e.keyCode == 38) {
			//keyCode 38 is down arrow
			this.drums.trigger(2);
		}
		if (e.keyCode == 39) {
			//keyCode 39 is right arrow
			this.drums.trigger(3);
		}
		if (e.keyCode == 40) {
			//keyCode 40 is up arrow
			this.drums.trigger(4);
		}
	}
}