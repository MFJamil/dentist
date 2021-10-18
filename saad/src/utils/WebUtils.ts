export class WebUtils{

    screenSize(module:any):string{
        return module.$vuetify.breakpoint.name;

    }

    isMobile(module:any):boolean{
        return this.screenSize(module)==='xs';

    }

}

const webUtils = new WebUtils();
export default webUtils;