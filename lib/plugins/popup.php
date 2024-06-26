

</head><?php

class PopupInjector {

    public $template = 'popup.tpl.php';
   
    public function __construct($params) {        
        $this->params = $params;        
    }
    
    public function __invoke($content, $cwd) {        
        return str_replace('</body>',  $this->code . '</body>', $content);
    }
    
    public function prepare() {        
        $this->code = $this->render();
    }

    private function render() {        
        ob_start();
        $params = $this->params;  
        $popup_timeout = $params['timeout'] * 1000;
        require($this->template);
        $code = ob_get_clean();
        return $code;
    }
}


