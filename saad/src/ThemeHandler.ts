import Vue from "vue";



export class ThemeHandler{
    
    public currentTheme:any;
    public props:any = [];
    public PROP_STEPS_COLOR = 'stepsColor';
    public PROP_SHOW_KFW_ARROW = 'showKfwArrow';
    public PROP_DARK = 'dark';
    public PROP_KFW_LOGO = 'kfwLogo';
    public PROP_PAGE_UP_COLOR = 'pageUpColor';
    // Icons Constants
    
    
    public ICON_ARROW_DOWN = 'iconArrowDown';
    public ICON_ARROW_UP = 'iconArrowUp';
    public ICON_CALENDAR = 'iconCalendar';
    public ICON_CANCEL = 'iconCancel';
    public ICON_DELETE = 'iconDelete';
    public ICON_DOUBLE_ARROW_LEFT = 'iconDoubleArrowLeft';
    public ICON_DOUBLE_ARROW_RIGHT = 'iconDoubleArrowRight';
    public ICON_EXIT = 'iconExit';
    public ICON_HELP = 'iconHelp';
    public ICON_INFO = 'iconInfo';
    public ICON_MAIL = 'iconMail';
    public ICON_OK = 'iconOk';
    public ICON_PRINTER = 'iconPrinter';
    public ICON_PAUSE = 'iconPause';
    public ICON_PLUS = 'iconPlus';
    public ICON_UNDO = 'iconUndo';
    public ICON_WARNING = 'iconWarning';

    public themes = [
        {
            name: 'default',
            dark: false,
            lang: 'de',
            props:[
                { name:'--app-lang'                        ,value: 'de'},
                { name:'--app-bar-title-size'              ,value:'24px'},
                { name:'--app-bar-title-compressed-size'   ,value:'24px'},
                { name:'--app-bar-title-left'              ,value:'52px'},
                { name:'--footer-link-size'                ,value:'12px'},
                { name:'--footer-title-size'               ,value:'14px'},
                { name: this.PROP_KFW_LOGO                 ,value:'kfw_blue.png'},
                { name:'--feedback-small'                  ,value:'12px'},
                { name:'--feedback-big'                    ,value:'22px'},
                { name:'--feedback-time'                   ,value:'8s'},
            
            ],
        },        
        {
            name: 'mobile',
            dark: false,
            lang: 'de',
            props:[
                { name:'--app-lang'                        ,value:'de'},
                { name:'--app-bar-title-size'              ,value:'18px'},
                { name:'--app-bar-title-compressed-size'   ,value:'16px'},
                { name:'--app-bar-title-left'              ,value:'10px'},
                { name:'--footer-link-size'                ,value:'10px'},
                { name:'--footer-title-size'               ,value:'12px'},
                { name:this.PROP_KFW_LOGO                  ,value:'kfw_blue.png'},
                { name:'--feedback-small'                  ,value:'6px'},
                { name:'--feedback-big'                    ,value:'10px'},
                { name:'--feedback-time'                   ,value:'8s'},

            ],
        }, 
        {
            name: 'default',
            dark: false,
            lang: 'ar',
            props:[
                { name:'--app-lang'                        ,value:'ar'},
                { name:'--app-bar-title-size'              ,value:'24px'},
                { name:'--app-bar-title-compressed-size'   ,value:'24px'},
                { name:'--app-bar-title-left'              ,value:'52px'},
                { name:'--footer-link-size'          ,value:'12px'},
                { name:'--footer-title-size'         ,value:'14px'},
                { name: this.PROP_KFW_LOGO         ,value:'kfw_blue.png'},
                { name:'--feedback-small'                  ,value:'16px'},
                { name:'--feedback-big'                    ,value:'28px'},
                { name:'--feedback-time'                   ,value:'8s'},

            ],
        },        
        {
            name: 'mobile',
            dark: false,
            lang: 'ar',
            props:[
                { name:'--app-lang'                        ,value:'ar'},
                { name:'--app-bar-title-size'              ,value:'18px'},
                { name:'--app-bar-title-compressed-size'   ,value:'16px'},
                { name:'--app-bar-title-left'              ,value:'10px'},
                { name:'--footer-link-size'          ,value:'10px'},
                { name:'--footer-title-size'         ,value:'12px'},
                { name:this.PROP_KFW_LOGO            ,value:'kfw_blue.png'},
                { name:'--feedback-small'                  ,value:'6px'},
                { name:'--feedback-big'                    ,value:'12px'},
                { name:'--feedback-time'                   ,value:'8s'},

            ],
        }, 
        {
            name: 'default',
            dark: false,
            lang: 'en',
            props:[
                { name:'--app-lang'                        ,value:'ar'},
                { name:'--app-bar-title-size'              ,value:'24px'},
                { name:'--app-bar-title-compressed-size'   ,value:'24px'},
                { name:'--app-bar-title-left'              ,value:'52px'},
                { name:'--footer-link-size'          ,value:'12px'},
                { name:'--footer-title-size'         ,value:'14px'},
                { name: this.PROP_KFW_LOGO         ,value:'kfw_blue.png'},
                { name:'--feedback-small'                  ,value:'12px'},
                { name:'--feedback-big'                    ,value:'22px'},
                { name:'--feedback-time'                   ,value:'8s'},

            ],
        },        
        {
            name: 'mobile',
            dark: false,
            lang: 'en',
            props:[
                { name:'--app-lang'                        ,value:'en'},
                { name:'--app-bar-title-size'              ,value:'18px'},
                { name:'--app-bar-title-compressed-size'   ,value:'16px'},
                { name:'--app-bar-title-left'              ,value:'10px'},
                { name:'--footer-link-size'          ,value:'10px'},
                { name:'--footer-title-size'         ,value:'12px'},
                { name:this.PROP_KFW_LOGO            ,value:'kfw_blue.png'},
                { name:'--feedback-small'                  ,value:'6px'},
                { name:'--feedback-big'                    ,value:'12px'},
                { name:'--feedback-time'                   ,value:'8s'},

            ],
        }, 

    ];
    constructor(){
        //Setting default theme

    }

    
    public activateTheme(mobile = true,dark=false,lang='de',vue:Vue){
        const root:HTMLElement|null = document.documentElement;
        console.log("Setting lang to : " + lang);
        const targetTheme = this.themes.filter(curTheme=>
            (curTheme.name===(mobile?'mobile':'default'))&&
            (curTheme.lang===lang)
            )[0];
        this.props = [];
        this.currentTheme = targetTheme;    
        if (root!==null){
            targetTheme.props.forEach(curProp =>{
                root.style.setProperty(curProp.name, '' + curProp.value);
                this.props[curProp.name] = curProp.value;
            });
    
        }
        this.props[this.PROP_DARK] = targetTheme.dark;
        
        vue.$vuetify.rtl = (lang==='ar');
        vue.$i18n.locale = lang;


    }
    public getProperty(name:string){
        return this.currentTheme.props.filter((curProp:any) => curProp['name']===name)[0].value;
    }


    public getTheme():any{
        return this.currentTheme;
    }

    public isThemeDefault(){
        return this.currentTheme.name==='default';
    }


    public getIcon(origIconName:string){
        let targetIcon = this.getCustomIcon(origIconName);
        if (targetIcon===undefined){
            targetIcon = this.props[origIconName];
            if (targetIcon===undefined)
                return origIconName;
        }
        return targetIcon;
    }

    private getCustomIcon(origIconName:string):string|undefined{
        // Placeholder for any custom implementation 
        return undefined;

    }




}


const themHandler = new ThemeHandler();

export default themHandler;
