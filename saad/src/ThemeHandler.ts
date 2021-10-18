


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
            dark: true,
            props:[
                { name:'--app-bar-title-size'        ,value:'24px'},

                { name: this.PROP_KFW_LOGO           ,value:'kfw_white.png'},
                { name:'--menuColor'                 ,value:'white'},
                { name: this.PROP_STEPS_COLOR        ,value:'primary'},
                { name: this.PROP_SHOW_KFW_ARROW     ,value: false},
                { name: this.PROP_PAGE_UP_COLOR      ,value:'primary'},
                { name:'--app_bar_dark_color'        ,value:'#1f4665'},
                { name:'--app_bar_light_color'       ,value:'#34658b'},
                { name:'--app_primary_color'         ,value:'#1f4665'},
                { name:'--disabled-value-color'      ,value:'white'},
                { name:'--disabled-label-color'      ,value:'white'},
                { name:'--grad_middle_light'         ,value:'#3b729c'},
                { name:'--grad_middle_dark'          ,value:'#6aa2cf'},
                { name:'--v-error-base'              ,value:'var(--v-error-lighten5)'},
                { name:'--exp_panel_arrow'           ,value:'white'},
                { name:'--exp_panel_text_color'      ,value:'white'},
                { name:'--toolbar_title_color'       ,value:'white'},
                { name:'--exp_panel_mask_color'      ,value:'white'},
                { name:'--fieldBorderColor'          ,value:'white'},
                { name:'--fieldTextColor'            ,value:'white'},
                { name:'--app_title_font_family'     ,value:'Roboto,sans-serif'},
                { name:'--app_title_font_size'       ,value:'24px'},
                { name:'--menuFont'                  ,value:'Roboto,sans-serif'},
                { name: '--messages_toolbar_bg'      ,value:'var(--v-primary-lighten2)'},
                { name: '--switch_border_radius'     ,value:'50%'},
                { name: '--switch_button_radius'     ,value:'35%'},
                { name: '--switch_color'             ,value:'inherit'},
                { name: '--switch_border_width'      ,value:'0px'},
                { name: '--switch_border_color'      ,value:'var(--v-kfw_gray-base)'},
                { name: '--switch_bg_color'          ,value:'white'},
                { name: '--top_panel_mask_title'     ,value:'black'},
                { name: this.ICON_ARROW_DOWN         ,value:'mdi-menu-down'},
                { name: this.ICON_ARROW_UP           ,value:'mdi-chevron-up'},
                { name: this.ICON_CALENDAR           ,value:'mdi-calendar'},
                { name: this.ICON_CANCEL             ,value:'mdi-close-circle-outline'},
                { name: this.ICON_DELETE             ,value:'mdi-delete-outline'},
                { name: this.ICON_DOUBLE_ARROW_LEFT  ,value:'mdi-chevron-double-left'},
                { name: this.ICON_DOUBLE_ARROW_RIGHT ,value:'mdi-chevron-double-right'},
                { name: this.ICON_EXIT               ,value:'mdi-exit-to-app'},
                { name: this.ICON_HELP               ,value:'mdi-help-circle-outline'},
                { name: this.ICON_INFO               ,value:'mdi-information'},  
                { name: this.ICON_MAIL               ,value:'mdi-email'},  
                { name: this.ICON_OK                 ,value:'mdi-check-outline'},                
                { name: this.ICON_PAUSE              ,value:'mdi-pause'},
                { name: this.ICON_PLUS               ,value:'mdi-plus'},
                { name: this.ICON_PRINTER            ,value:'mdi-printer'},
                { name: this.ICON_UNDO               ,value:'mdi-undo-variant'},
                { name: this.ICON_WARNING            ,value:'mdi-alert-outline'},
                
                

            ],
        },        
        {
            name: 'default',
            dark: false,
            props:[
                { name:'--app-bar-title-size'        ,value:'24px'},
                { name:'--footer-link-size'          ,value:'12px'},
                { name:'--footer-title-size'         ,value:'14px'},

                { name: this.PROP_KFW_LOGO         ,value:'kfw_blue.png'},
                { name:'--menuColor'               ,value:'black'},
                { name: this.PROP_STEPS_COLOR      ,value:'primary'},
                { name: this.PROP_SHOW_KFW_ARROW   ,value: false},
                { name: this.PROP_PAGE_UP_COLOR      ,value:'primary'},
                { name:'--app_bar_dark_color'      ,value:'#cdcdcd'},
                { name:'--app_bar_light_color'     ,value:'white'},
                { name:'--app_primary_color'         ,value:'#1f4665'},
                { name:'--disabled-value-color'      ,value:'var(--v-kfw_gray-base)'},
                { name:'--disabled-label-color'      ,value:'var(--v-kfw_gray-base)'},
                { name:'--grad_middle_light'       ,value:'#d2d2d2'},
                { name:'--grad_middle_dark'        ,value:'#white'},
                { name:'--v-error-base'            ,value:'var(--v-kfw_red-base)'},
                { name:'--exp_panel_arrow'         ,value:'gray'},
                { name:'--exp_panel_text_color'    ,value:'gray'},
                { name:'--toolbar_title_color'     ,value:'black'},
                { name:'--exp_panel_mask_color'    ,value:'black'},
                { name:'--fieldBorderColor'        ,value:'black'},
                { name:'--fieldTextColor'          ,value:'black'},
                { name:'--app_title_font_family'   ,value:'Roboto,sans-serif'},
                { name:'--app_title_font_size'     ,value:'24px'},
                { name:'--menuFont'                ,value:'Roboto,sans-serif'},
                { name:'--messages_toolbar_bg'       ,value:'var(--v-primary-lighten2)'},
                { name: '--switch_border_radius'     ,value:'50%'},
                { name: '--switch_button_radius'     ,value:'25%'},
                { name: '--switch_color'             ,value:'white'},
                { name: '--switch_border_width'      ,value:'0px'},
                { name: '--switch_border_color'      ,value:'var(--v-kfw_gray-base)'},
                { name: '--switch_bg_color'          ,value:'var(--v-kfw_gray-base)'},
                { name: '--top_panel_mask_title'     ,value:'black'},
                { name: this.ICON_ARROW_DOWN         ,value:'mdi-menu-down'},
                { name: this.ICON_ARROW_UP           ,value:'mdi-chevron-up'},
                { name: this.ICON_CALENDAR           ,value:'mdi-calendar'},
                { name: this.ICON_CANCEL             ,value:'mdi-close-circle-outline'},
                { name: this.ICON_DELETE             ,value:'mdi-delete-outline'},
                { name: this.ICON_DOUBLE_ARROW_LEFT  ,value:'mdi-chevron-double-left'},
                { name: this.ICON_DOUBLE_ARROW_RIGHT ,value:'mdi-chevron-double-right'},
                { name: this.ICON_EXIT               ,value:'mdi-exit-to-app'},
                { name: this.ICON_INFO               ,value:'mdi-information'},  
                { name: this.ICON_HELP               ,value:'mdi-help-circle-outline'},
                { name: this.ICON_MAIL               ,value:'mdi-email'},
                { name: this.ICON_OK                 ,value:'mdi-check-outline'},                
                { name: this.ICON_PAUSE              ,value:'mdi-pause'},
                { name: this.ICON_PLUS               ,value:'mdi-plus'},
                { name: this.ICON_PRINTER            ,value:'mdi-printer'},
                { name: this.ICON_UNDO               ,value:'mdi-undo-variant'},
                { name: this.ICON_WARNING            ,value:'mdi-alert-outline'},

            ],
        },        
        {
            name: 'mobile',
            dark: false,
            props:[
                { name:'--app-bar-title-size'        ,value:'18px'},
                { name:'--footer-link-size'          ,value:'10px'},
                { name:'--footer-title-size'         ,value:'12px'},

                { name:this.PROP_KFW_LOGO            ,value:'kfw_blue.png'},
                { name:'--menuColor'                 ,value:'var(--v-kfw_light_blue-base)'},
                { name: this.PROP_STEPS_COLOR        ,value:'kfw_green'},
                { name: this.PROP_SHOW_KFW_ARROW     ,value: true},
                { name: this.PROP_PAGE_UP_COLOR      ,value:'kfw_petrol'},
                /*
                { name:'--app_bar_dark_color'        ,value:'var(--v-kfw_gray-lighten4)'},
                { name:'--app_bar_light_color'       ,value:'var(--v-kfw_gray-lighten4)'},
                */
               { name:'--app_bar_dark_color'        ,value:'white'},
               { name:'--app_bar_light_color'       ,value:'white'},

               { name:'--disabled-value-color'      ,value:'var(--v-kfw_blue-lighten1)'},
               { name:'--disabled-label-color'      ,value:'var(--v-kfw_blue-lighten1)'},
               /*
               { name:'--disabled-value-color'      ,value:'var(--v-kfw_gray-base)'},
               { name:'--disabled-label-color'      ,value:'var(--v-kfw_gray-base)'},
               */


                { name:'--grad_middle_light'         ,value:'#d2d2d2'},
                { name:'--grad_middle_dark'          ,value:'#white'},
                { name:'--v-error-base'              ,value:'var(--v-kfw_red-base)'},
                { name:'--exp_panel_arrow'           ,value:'var(--v-kfw_green-darken1)'},
                { name:'--exp_panel_text_color'      ,value:'var(--v-kfw_green-darken1)'},
                { name:'--toolbar_title_color'       ,value:'var(--v-primary-darken1)'},
                { name:'--exp_panel_mask_color'      ,value:'var(--v-primary-darken1)'},
                { name:'--fieldBorderColor'          ,value:'var(--v-kfw_gray-lighten3)'},
                { name:'--fieldTextColor'            ,value:'var(--v-primary-darken1)'},
                { name:'--app_title_font_family'     ,value:'KFWCentroSans'},
                { name:'--app_title_font_size'       ,value:'26px'},
                { name:'--menuFont'                  ,value:'KFWCentroSansMedium'},
                { name: '--messages_toolbar_bg'      ,value:'var(--v-kfw_blue-lighten3)'},
                { name: '--switch_border_radius'     ,value:'10%'},
                { name: '--switch_button_radius'     ,value:'10%'},
                { name: '--switch_color'             ,value:'var(--v-kfw_blue-base)'},
                { name: '--switch_border_width'      ,value:'2px'},
                { name: '--switch_border_color'      ,value:'var(--v-kfw_gray-base)'},
                { name: '--switch_bg_color'          ,value:'var(--v-kfw_gray-lighten3)'},
                { name: '--top_panel_mask_title'     ,value:'var(--v-primary-darken1)'},
                { name: this.ICON_ARROW_DOWN         ,value:'$vuetify.icons.pfeil_runter'},
                { name: this.ICON_ARROW_UP           ,value:'$vuetify.icons.pfeil_hoch'},
                { name: this.ICON_CALENDAR           ,value:'$vuetify.icons.kalender'},
                { name: this.ICON_CANCEL             ,value:'$vuetify.icons.schliessen'},
                { name: this.ICON_DELETE             ,value:'$vuetify.icons.mülleimer'},
                { name: this.ICON_DOUBLE_ARROW_LEFT  ,value:'$vuetify.icons.doppelpfeil_links'},
                { name: this.ICON_DOUBLE_ARROW_RIGHT ,value:'$vuetify.icons.doppelpfeil_rechts'},
                { name: this.ICON_EXIT               ,value:'$vuetify.icons.export'},
                { name: this.ICON_HELP               ,value:'$vuetify.icons.info'},
                { name: this.ICON_INFO               ,value:'$vuetify.icons.info'},
                { name: this.ICON_MAIL               ,value:'$vuetify.icons.mail'},
                { name: this.ICON_OK                 ,value:'$vuetify.icons.haken'},                
                { name: this.ICON_PAUSE              ,value:'$vuetify.icons.pause'},
                { name: this.ICON_PLUS               ,value:'$vuetify.icons.plus'},
                { name: this.ICON_PRINTER            ,value:'$vuetify.icons.drucker'},
                { name: this.ICON_UNDO               ,value:'$vuetify.icons.zurücksetzen'},
                { name: this.ICON_WARNING            ,value:'$vuetify.icons.warnung'},
            ],
        }, 
        {
            name: 'mobile',
            dark: true,
            props:[
                { name:'--app-bar-title-size'        ,value:'16px'},

                { name: this.PROP_KFW_LOGO           ,value:'kfw_white.png'},
                { name:'--menuColor'                 ,value:'var(--v-kfw_blue-lighten5)'},
                { name: this.PROP_STEPS_COLOR        ,value:'kfw_green'},
                { name: this.PROP_SHOW_KFW_ARROW     ,value: true},
                { name: this.PROP_PAGE_UP_COLOR      ,value:'kfw_petrol'},
                { name:'--app_bar_dark_color'        ,value:'var(--v-kfw_petrol-base)'},
                { name:'--app_bar_light_color'       ,value:'var(--v-kfw_petrol-lighten1)'},
                { name:'--app_primary_color'         ,value:'var(--v-kfw_petrol-base)'},
                /* in case we use the KfW Green color 
                { name:'--disabled-value-color'      ,value:'var(--v-kfw_green-lighten1)'},
                { name:'--disabled-label-color'      ,value:'var(--v-kfw_green-lighten1)'},

                { name:'--disabled-value-color'      ,value:'white'},
                { name:'--disabled-label-color'      ,value:'white'},

                */
               
               { name:'--disabled-value-color'      ,value:'var(--v-kfw_petrol-lighten5)'},
               { name:'--disabled-label-color'      ,value:'var(--v-kfw_petrol-lighten5)'},



                { name:'--grad_middle_light'         ,value:'var(--v-kfw_petrol-lighten1)'},
                { name:'--grad_middle_dark'          ,value:'var(--v-kfw_petrol-base)'},
                { name:'--v-error-base'              ,value:'var(--v-error-lighten5)'},
                { name:'--exp_panel_arrow'           ,value:'var(--v-kfw_green-lighten1)'},
                { name:'--exp_panel_text_color'      ,value:'var(--v-kfw_green-lighten1)'},
                { name:'--toolbar_title_color'       ,value:'white'},
                { name:'--exp_panel_mask_color'      ,value:'var(--v-kfw_light_blue-lighten3)'},
                { name:'--fieldBorderColor'          ,value:'white'},
                { name:'--fieldTextColor'            ,value:'white'},
                { name:'--app_title_font_family'     ,value:'KFWCentroSans'},
                { name:'--app_title_font_size'       ,value:'26px'},
                { name:'--menuFont'                  ,value:'KFWCentroSansMedium'},
                { name: '--messages_toolbar_bg'      ,value:'var(--v-kfw_blue-lighten3)'},
                { name: '--switch_border_radius'     ,value:'10%'},
                { name: '--switch_button_radius'     ,value:'10%'},
                { name: '--switch_color'             ,value:'white'},
                { name: '--switch_border_width'      ,value:'2px'},
                { name: '--switch_border_color'      ,value:'var(--v-kfw_gray-base)'},
                { name: '--switch_bg_color'          ,value:'var(--v-kfw_gray-lighten3)'},
                { name: '--top_panel_mask_title'     ,value:'var(--v-primary-darken1)'},
                { name: this.ICON_ARROW_DOWN         ,value:'$vuetify.icons.pfeil_runter'},
                { name: this.ICON_ARROW_UP           ,value:'$vuetify.icons.pfeil_hoch'},
                { name: this.ICON_CALENDAR           ,value:'$vuetify.icons.kalender'},
                { name: this.ICON_CANCEL             ,value:'$vuetify.icons.schliessen'},
                { name: this.ICON_DELETE             ,value:'$vuetify.icons.mülleimer'},
                { name: this.ICON_DOUBLE_ARROW_LEFT  ,value:'$vuetify.icons.doppelpfeil_links'},
                { name: this.ICON_DOUBLE_ARROW_RIGHT ,value:'$vuetify.icons.doppelpfeil_rechts'},
                { name: this.ICON_EXIT               ,value:'$vuetify.icons.export'},
                { name: this.ICON_HELP               ,value:'$vuetify.icons.info'},
                { name: this.ICON_INFO               ,value:'$vuetify.icons.info'},  
                { name: this.ICON_MAIL               ,value:'$vuetify.icons.mail'},
                { name: this.ICON_OK                 ,value:'$vuetify.icons.haken'},                
                { name: this.ICON_PAUSE              ,value:'$vuetify.icons.pause'},
                { name: this.ICON_PLUS               ,value:'$vuetify.icons.plus'},
                { name: this.ICON_PRINTER            ,value:'$vuetify.icons.drucker'},
                { name: this.ICON_UNDO               ,value:'$vuetify.icons.zurücksetzen'},
                { name: this.ICON_WARNING            ,value:'$vuetify.icons.warnung'},
                
            ],
        },
       

    ];
    constructor(){
        //Setting default theme

    }

    
    public activateTheme(mobile = true,dark=false){
        const root = document.documentElement;
        
        const targetTheme = this.themes.filter(curTheme=>(curTheme.name===(mobile?'mobile':'default'))&&(curTheme.dark===dark))[0];
        this.props = [];
        this.currentTheme = targetTheme;    
        targetTheme.props.forEach(curProp =>{
            root.style.setProperty(curProp.name, '' + curProp.value);
            this.props[curProp.name] = curProp.value;
        });
        this.props[this.PROP_DARK] = targetTheme.dark;
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
