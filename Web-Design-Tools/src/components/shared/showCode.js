export const inputBorderEffect = {
  effect1: {
    html: `<pre>
    &lt;div class="col-3"&gt;
        &lt;input class="effect-1" type="text" placeholder="Effect 1" /&gt;
        &lt;span class="focus-border"&gt;&lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-1 {
      border: 0;
      padding: 7px 0;
      border-bottom: 1px solid #ccc;
    }
    .effect-1 ~ .focus-border {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #3399ff;
      transition: 0.4s;
    }
    .effect-1:focus ~ .focus-border {
      width: 100%;
      transition: 0.4s;
    }</pre>`,
  },
  effect2: {
    html: `<pre>
    &lt;div class="col-3"&gt;
        &lt;input class="effect-2" type="text" placeholder="Effect 2" /&gt;
        &lt;span class="focus-border"&gt;&lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-2 {
      border: 0;
      padding: 7px 0;
      border-bottom: 1px solid #ccc;
    }
    .effect-2 ~ .focus-border {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0%;
      height: 2px;
      background-color: #3399ff;
      transition: 0.4s;
    }
    .effect-2:focus ~ .focus-border {
      width: 100%;
      transition: 0.4s;
      left: 0;
    }</pre>`,
  },
  effect3: {
    html: `<pre>
    &lt;div class="col-3"&gt;
        &lt;input class="effect-3" type="text" placeholder="Effect 3" /&gt;
        &lt;span class="focus-border"&gt;&lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-3 {
      border: 0;
      padding: 7px 0;
      border-bottom: 1px solid #ccc;
    }
    .effect-3 ~ .focus-border {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      z-index: 99;
    }
    .effect-3 ~ .focus-border:before,
    .effect-3 ~ .focus-border:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: #3399ff;
      transition: 0.4s;
    }
    .effect-3 ~ .focus-border:after {
      left: auto;
      right: 0;
    }
    .effect-3:focus ~ .focus-border:before,
    .effect-3:focus ~ .focus-border:after {
      width: 50%;
      transition: 0.4s;
    }</pre>`,
  },
  effect4: {
    html: `<pre>
    &lt;div class="col-3"&gt;
        &lt;input class="effect-4" type="text" placeholder="Effect 4" /&gt;
        &lt;span class="focus-border"&gt;&lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-4:focus {
      padding: 5px 14px 7px;
      transition: 0.4s;
    }
    .effect-4 {
      border: none;
      padding: 5px 0 7px;
      border-bottom: 1px solid #ccc;
      transition: 0.4s;
      background-color: transparent;
    }
    .effect-4:focus,
    .effect-4:not(:placeholder-shown) {
      border: none;
      padding: 5px 14px 7px;
    }
    .effect-4 ~ .focus-border {
      position: absolute;
      height: 0;
      bottom: 0px;
      left: 0px;
      width: 100%;
      transition: 0.4s;
      z-index: -1;
    }
    .effect-4:focus ~ .focus-border {
      transition: 0.4s;
      height: 36px;
      border: 2px solid #3399ff;
      </pre>`,
  },
  effect5: {
    html: `<pre>
    &lt;div class="col-3"&gt;
        &lt;input class="effect-5" type="text" placeholder="Effect 5" /&gt;
        &lt;span class="focus-border"&gt;&lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-5:focus,
    .effect-5:not(:placeholder-shown) {
      padding: 5px 14px 7px;
      transition: 0.4s;
    }
    .effect-5 {
      border: 0;
      padding: 5px 0 7px;
      border: 1px solid transparent;
      border-bottom-color: #ccc;
      transition: 0.4s;
    }
    .effect-5 ~ .focus-border {
      position: absolute;
      height: 36px;
      bottom: 0;
      left: 0;
      width: 0;
      transition: 0.4s;
    }
    .effect-5:focus ~ .focus-border {
      width: 100%;
      transition: 0.4s;
      border: 2px solid #3399ff;
    }</pre>`,
  },
  effect6: {
    html: `<pre>
    &lt;div class="col-3"&gt;
        &lt;input class="effect-6" type="text" placeholder="Effect 6" /&gt;
        &lt;span class="focus-border"&gt;&lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-6:focus,
    .effect-6:not(:placeholder-shown) {
      padding: 5px 14px 7px;
      transition: 0.4s;
    }
    .effect-6 {
      border: 0;
      padding: 5px 0 7px;
      border: 1px solid transparent;
      border-bottom-color: #ccc;
      transition: 0.4s;
    }
    .effect-6 ~ .focus-border {
      position: absolute;
      height: 36px;
      bottom: 0;
      right: 0;
      width: 0;
      transition: 0.4s;
    }
    .effect-6:focus ~ .focus-border {
      width: 100%;
      transition: 0.4s;
      border: 2px solid #3399ff;
    }</pre>`,
  },
  effect7: {
    html: `<pre>
    &lt;div class="col-3"&gt;
        &lt;input class="effect-7" type="text" placeholder="Effect 7" /&gt;
        &lt;span class="focus-border"&gt;
          &lt;i&gt;&lt;/i&gt;
        &lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-7 {
      border: 1px solid #ccc;
      padding: 7px 14px 9px;
      transition: 0.4s;
    }
    .effect-7 ~ .focus-border:before,
    .effect-7 ~ .focus-border:after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: #3399ff;
      transition: 0.4s;
    }
    .effect-7 ~ .focus-border:after {
      top: auto;
      bottom: 0;
    }
    .effect-7 ~ .focus-border i:before,
    .effect-7 ~ .focus-border i:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 2px;
      height: 0;
      background-color: #3399ff;
      transition: 0.6s;
    }
    .effect-7 ~ .focus-border i:after {
      left: auto;
      right: 0;
    }
    .effect-7:focus ~ .focus-border:before,
    .effect-7:focus ~ .focus-border:after {
      left: 0;
      width: 100%;
      transition: 0.4s;
    }
    .effect-7:focus ~ .focus-border i:before,
    .effect-7:focus ~ .focus-border i:after {
      top: 0;
      height: 100%;
      transition: 0.6s;
    }
    </pre>`,
  },
  effect8: {
    html: `<pre>
    &lt;div class="col-3"&gt;
        &lt;input class="effect-8" type="text" placeholder="Effect 8" /&gt;
        &lt;span class="focus-border"&gt;
          &lt;i&gt;&lt;/i&gt;
        &lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-8 {
      border: 1px solid #ccc;
      padding: 7px 14px 9px;
      transition: 0.4s;
    }
    .effect-8 ~ .focus-border:before,
    .effect-8 ~ .focus-border:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #3399ff;
      transition: 0.3s;
    }
    .effect-8 ~ .focus-border:after {
      top: auto;
      bottom: 0;
      left: auto;
      right: 0;
    }
    .effect-8 ~ .focus-border i:before,
    .effect-8 ~ .focus-border i:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 0;
      background-color: #3399ff;
      transition: 0.4s;
    }
    .effect-8 ~ .focus-border i:after {
      left: auto;
      right: 0;
      top: auto;
      bottom: 0;
    }
    .effect-8:focus ~ .focus-border:before,
    .effect-8:focus ~ .focus-border:after {
      width: 100%;
      transition: 0.3s;
    }
    .effect-8:focus ~ .focus-border i:before,
    .effect-8:focus ~ .focus-border i:after {
      height: 100%;
      transition: 0.4s;
    }
    </pre>`,
  },
  effect9: {
    html: `<pre>
    &lt;div class="col-3"&gt;
        &lt;input class="effect-9" type="text" placeholder="Effect 9" /&gt;
        &lt;span class="focus-border"&gt;
          &lt;i&gt;&lt;/i&gt;
        &lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-9 {
      border: 1px solid #ccc;
      padding: 7px 14px 9px;
      transition: 0.4s;
    }
    .effect-9 ~ .focus-border:before,
    .effect-9 ~ .focus-border:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      height: 2px;
      background-color: #3399ff;
      transition: 0.2s;
      transition-delay: 0.2s;
    }
    .effect-9 ~ .focus-border:after {
      top: auto;
      bottom: 0;
      right: auto;
      left: 0;
      transition-delay: 0.6s;
    }
    .effect-9 ~ .focus-border i:before,
    .effect-9 ~ .focus-border i:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 0;
      background-color: #3399ff;
      transition: 0.2s;
    }
    .effect-9 ~ .focus-border i:after {
      left: auto;
      right: 0;
      top: auto;
      bottom: 0;
      transition-delay: 0.4s;
    }
    .effect-9:focus ~ .focus-border:before,
    .effect-9:focus ~ .focus-border:after {
      width: 100%;
      transition: 0.2s;
      transition-delay: 0.6s;
    }
    .effect-9:focus ~ .focus-border:after {
      transition-delay: 0.2s;
    }
    .effect-9:focus ~ .focus-border i:before,
    .effect-9:focus ~ .focus-border i:after {
      height: 100%;
      transition: 0.2s;
    }
    .effect-9:focus ~ .focus-border i:after {
      transition-delay: 0.4s;
    }
    </pre>`,
  },
};

export const inputBGEffect = {
  effect10: {
    html: `<pre>
    &lt;div class="col-3"&gt;
        &lt;input class="effect-10" type="text" placeholder="Effect 10" /&gt;
        &lt;span class="focus-bg"&gt;&lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-10 {
      border: 0;
      padding: 7px 15px;
      border: 1px solid #ccc;
      position: relative;
      background: transparent;
    }    
    .effect-10 ~ .focus-bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #ededed;
      opacity: 0;
      transition: 0.5s;
      z-index: -1;
    }
    .effect-10:focus ~ .focus-bg {
      transition: 0.5s;
      opacity: 1;
    }
    </pre>`,
  },
  effect11: {
    html: `<pre>
    &lt;div class="col-3"&gt;
        &lt;input class="effect-11" type="text" placeholder="Effect 11" /&gt;
        &lt;span class="focus-bg"&gt;&lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-11 {
      border: 0;
      padding: 7px 15px;
      border: 1px solid #ccc;
      position: relative;
      background: transparent;
    } 
    .effect-11 ~ .focus-bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      background-color: #ededed;
      transition: 0.3s;
      z-index: -1;
    }
    .effect-11:focus ~ .focus-bg {
      transition: 0.3s;
      width: 100%;
    }
    </pre>`,
  },
  effect12: {
    html: `<pre>
    &lt;div class="col-3"&gt;
        &lt;input class="effect-12" type="text" placeholder="Effect 12" /&gt;
        &lt;span class="focus-bg"&gt;&lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-12 {
      border: 0;
      padding: 7px 15px;
      border: 1px solid #ccc;
      position: relative;
      background: transparent;
    } 
    .effect-12 ~ .focus-bg {
      position: absolute;
      left: 50%;
      top: 0;
      width: 0;
      height: 100%;
      background-color: #ededed;
      transition: 0.3s;
      z-index: -1;
    }
    .effect-12:focus ~ .focus-bg {
      transition: 0.3s;
      width: 100%;
      left: 0;
    }
    </pre>`,
  },
  effect13: {
    html: `<pre>
    &lt;div class="col-3"&gt;
        &lt;input class="effect-13" type="text" placeholder="Effect 13" /&gt;
        &lt;span class="focus-bg"&gt;&lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-13 {
      border: 0;
      padding: 7px 15px;
      border: 1px solid #ccc;
      position: relative;
      background: transparent;
    } 
    .effect-13 ~ .focus-bg:before,
    .effect-13 ~ .focus-bg:after {
       content: "";
       position: absolute;
       left: 0;
       top: 0;
       width: 0;
       height: 100%;
       background-color: #ededed;
       transition: 0.3s;
       z-index: -1;
    }
    .effect-13:focus ~ .focus-bg:before {
      transition: 0.3s;
      width: 50%;
    }
    .effect-13 ~ .focus-bg:after {
      left: auto;
      right: 0;
    }   
    .effect-13:focus ~ .focus-bg:after {
      transition: 0.3s;
      width: 50%;
    }
    </pre>`,
  },
  effect14: {
    html: `<pre>
    &lt;div class="col-3"&gt;
        &lt;input class="effect-14" type="text" placeholder="Effect 14" /&gt;
        &lt;span class="focus-bg"&gt;&lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-14 {
      border: 0;
      padding: 7px 15px;
      border: 1px solid #ccc;
      position: relative;
      background: transparent;
    } 
    .effect-14 ~ .focus-bg:before,
    .effect-14 ~ .focus-bg:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 0;
      background-color: #ededed;
      transition: 0.3s;
      z-index: -1;
    }
    .effect-14:focus ~ .focus-bg:before {
      transition: 0.3s;
      width: 50%;
      height: 100%;
    }
    .effect-14 ~ .focus-bg:after {
      left: auto;
      right: 0;
      top: auto;
      bottom: 0;
    }
    .effect-14:focus ~ .focus-bg:after {
      transition: 0.3s;
      width: 50%;
      height: 100%;
    }
    </pre>`,
  },
  effect15: {
    html: `<pre>
    &lt;div class="col-3"&gt;
        &lt;input class="effect-15" type="text" placeholder="Effect 15" /&gt;
        &lt;span class="focus-bg"&gt;&lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-15 {
      border: 0;
      padding: 7px 15px;
      border: 1px solid #ccc;
      position: relative;
      background: transparent;
    } 
    .effect-15 ~ .focus-bg:before,
    .effect-15 ~ .focus-bg:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 0;
      height: 0;
      background-color: #ededed;
      transition: 0.3s;
      z-index: -1;
    }
    .effect-15:focus ~ .focus-bg:before {
      transition: 0.3s;
      width: 50%;
      left: 0;
      top: 0;
      height: 100%;
    }
    .effect-15 ~ .focus-bg:after {
      left: auto;
      right: 50%;
      top: auto;
      bottom: 50%;
    }
    .effect-15:focus ~ .focus-bg:after {
      transition: 0.3s;
      width: 50%;
      height: 100%;
      bottom: 0;
      right: 0;
    }
    </pre>`,
  },
};

export const inputLabelEffect = {
  effect16: {
    html: `<pre>
    &lt;div class="col-3 input-effect"&gt;
      &lt;input class="effect-16" type="text" placeholder=" " /&gt;
      &lt;label&gt;Effect 16&lt;/label&gt;
      &lt;span class="focus-border"&gt;&lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-16 {
      border: 0;
      padding: 4px 0;
      border-bottom: 1px solid #ccc;
      background-color: transparent;
    }
    .effect-16 ~ .focus-border {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #3399ff;
      transition: 0.4s;
    }
    .effect-16:focus ~ .focus-border {
      width: 100%;
      transition: 0.4s;
    }
    .effect-16 ~ label {
      position: absolute;
      left: 0;
      width: 100%;
      top: 0px;
      color: #aaa;
      transition: 0.3s;
      z-index: -1;
      letter-spacing: 0.5px;
    }
    .effect-16:focus ~ label,
    .effect-16:not(:placeholder-shown) ~ label {
      top: -16px;
      font-size: 12px;
      color: #3399ff;
      transition: 0.3s;
    }
    .effect-16:not(:placeholder-shown) ~ label {
      color: #aaa;
    }    
    </pre>`,
  },
  effect17: {
    html: `<pre>
    &lt;div class="col-3 input-effect"&gt;
      &lt;input class="effect-17" type="text" placeholder=" " /&gt;
      &lt;label&gt;Effect 17&lt;/label&gt;
      &lt;span class="focus-border"&gt;&lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-17 {
      border: 0;
      padding: 4px 0;
      border-bottom: 1px solid #ccc;
      background-color: transparent;
    }
    .effect-17:not(:placeholder-shown) ~ .focus-border,
    .effect-17 ~ .focus-border {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: #3399ff;
      transition: 0.4s;
    }
    .effect-17:focus ~ .focus-border,
    .effect-17:not(:placeholder-shown):focus ~ .focus-border {
      width: 100%;
      transition: 0.4s;
      left: 0;
    }
    .effect-17 ~ label {
      position: absolute;
      left: 0;
      width: 100%;
      top: 0px;
      color: #aaa;
      transition: 0.3s;
      z-index: -1;
      letter-spacing: 0.5px;
    }
    .effect-17:focus ~ label,
    .effect-17:not(:placeholder-shown) ~ label {
      top: -16px;
      font-size: 12px;
      color: #3399ff;
      transition: 0.3s;
    }
    .effect-17:not(:placeholder-shown) ~ label {
      color: #aaa;
    }
    
    </pre>`,
  },
  effect18: {
    html: `<pre>
    &lt;div class="col-3 input-effect"&gt;
      &lt;input class="effect-18" type="text" placeholder=" " /&gt;
      &lt;label&gt;Effect 18&lt;/label&gt;
      &lt;span class="focus-border"&gt;&lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-18 {
      border: 0;
      padding: 4px 0;
      border-bottom: 1px solid #ccc;
      background-color: transparent;
    }
    .effect-18 ~ .focus-border {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      z-index: 99;
    }
    .effect-18 ~ .focus-border:before,
    .effect-18 ~ .focus-border:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: #3399ff;
      transition: 0.4s;
    }
    .effect-18 ~ .focus-border:after {
      left: auto;
      right: 0;
    }
    .effect-18:focus ~ .focus-border:before,
    .effect-18:focus ~ .focus-border:after,
    .effect-18:not(:placeholder-shown):focus ~ .focus-border:before,
    .effect-18:not(:placeholder-shown):focus ~ .focus-border:after {
      width: 50%;
      transition: 0.4s;
    }
    .effect-18 ~ label {
      position: absolute;
      left: 0;
      width: 100%;
      top: 0px;
      color: #aaa;
      transition: 0.3s;
      z-index: -1;
      letter-spacing: 0.5px;
    }
    .effect-18:focus ~ label,
    .effect-18:not(:placeholder-shown) ~ label {
      top: -16px;
      font-size: 12px;
      color: #3399ff;
      transition: 0.3s;
    }
    .effect-18:not(:placeholder-shown) ~ label {
      color: #aaa;
    }
    </pre>`,
  },
  effect19: {
    html: `<pre>
    &lt;div class="col-3 input-effect"&gt;
      &lt;input class="effect-19" type="text" placeholder=" " /&gt;
      &lt;label&gt;Effect 19&lt;/label&gt;
      &lt;span class="focus-border"&gt;
        &lt;i&gt;&lt;/i&gt;
      &lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-19 {
      border: 1px solid #ccc;
      padding: 7px 14px;
      transition: 0.4s;
      background: transparent;
    }
    .effect-19 ~ .focus-border:before,
    .effect-19 ~ .focus-border:after {
      content: "";
      position: absolute;
      top: -1px;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: #3399ff;
      transition: 0.4s;
    }
    .effect-19 ~ .focus-border:after {
      top: auto;
      bottom: 0;
    }
    .effect-19 ~ .focus-border i:before,
    .effect-19 ~ .focus-border i:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 2px;
      height: 0;
      background-color: #3399ff;
      transition: 0.6s;
    }
    .effect-19 ~ .focus-border i:after {
      left: auto;
      right: 0;
    }
    .effect-19:focus ~ .focus-border:before,
    .effect-19:focus ~ .focus-border:after,
    .effect-19:not(:placeholder-shown):focus ~ .focus-border:before,
    .effect-19:not(:placeholder-shown):focus ~ .focus-border:after {
      left: 0;
      width: 100%;
      transition: 0.4s;
    }
    .effect-19:focus ~ .focus-border i:before,
    .effect-19:focus ~ .focus-border i:after,
    .effect-19:not(:placeholder-shown):focus ~ .focus-border i:before,
    .effect-19:not(:placeholder-shown):focus ~ .focus-border i:after {
      top: -1px;
      height: 100%;
      transition: 0.6s;
    }
    .effect-19 ~ label {
      position: absolute;
      left: 14px;
      width: 100%;
      top: 10px;
      color: #aaa;
      transition: 0.3s;
      z-index: -1;
      letter-spacing: 0.5px;
    }
    .effect-19:focus ~ label,
    .effect-19:not(:placeholder-shown) ~ label {
      top: -18px;
      left: 0;
      font-size: 12px;
      color: #3399ff;
      transition: 0.3s;
    }
    .effect-19:not(:placeholder-shown) ~ label {
      color: #aaa;
    }    
    </pre>`,
  },
  effect20: {
    html: `<pre>
    &lt;div class="col-3 input-effect"&gt;
      &lt;input class="effect-20" type="text" placeholder=" " /&gt;
      &lt;label&gt;Effect 20&lt;/label&gt;
      &lt;span class="focus-border"&gt;
        &lt;i&gt;&lt;/i&gt;
      &lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-20 {
      border: 1px solid #ccc;
      padding: 7px 14px;
      transition: 0.4s;
      background: transparent;
    }
    .effect-20 ~ .focus-border:before,
    .effect-20 ~ .focus-border:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #3399ff;
      transition: 0.3s;
    }
    .effect-20 ~ .focus-border:after {
      top: auto;
      bottom: 0;
      left: auto;
      right: 0;
    }
    .effect-20 ~ .focus-border i:before,
    .effect-20 ~ .focus-border i:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 0;
      background-color: #3399ff;
      transition: 0.4s;
    }
    .effect-20 ~ .focus-border i:after {
      left: auto;
      right: 0;
      top: auto;
      bottom: 0;
    }
    .effect-20:focus ~ .focus-border:before,
    .effect-20:focus ~ .focus-border:after,
    .effect-20:not(:placeholder-shown):focus ~ .focus-border:before,
    .effect-20:not(:placeholder-shown):focus ~ .focus-border:after {
      width: 100%;
      transition: 0.3s;
    }
    .effect-20:focus ~ .focus-border i:before,
    .effect-20:focus ~ .focus-border i:after,
    .effect-20:not(:placeholder-shown):focus ~ .focus-border i:before,
    .effect-20:not(:placeholder-shown):focus ~ .focus-border i:after {
      height: 100%;
      transition: 0.4s;
    }
    .effect-20 ~ label {
      position: absolute;
      left: 14px;
      width: 100%;
      top: 10px;
      color: #aaa;
      transition: 0.3s;
      z-index: -1;
      letter-spacing: 0.5px;
    }
    .effect-20:focus ~ label,
    .effect-20:not(:placeholder-shown) ~ label {
      top: -18px;
      left: 0;
      font-size: 12px;
      color: #3399ff;
      transition: 0.3s;
    }
    
    .effect-20:not(:placeholder-shown) ~ label {
      color: #aaa;
    }
    </pre>`,
  },
  effect21: {
    html: `<pre>
    &lt;div class="col-3 input-effect"&gt;
      &lt;input class="effect-21" type="text" placeholder=" " /&gt;
      &lt;label&gt;Effect 21&lt;/label&gt;
      &lt;span class="focus-border"&gt;
        &lt;i&gt;&lt;/i&gt;
      &lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-21 {
      border: 1px solid #ccc;
      padding: 7px 14px;
      transition: 0.4s;
      background: transparent;
    }
    .effect-21 ~ .focus-border:before,
    .effect-21 ~ .focus-border:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      height: 2px;
      background-color: #3399ff;
      transition: 0.2s;
      transition-delay: 0.2s;
    }
    .effect-21 ~ .focus-border:after {
      top: auto;
      bottom: 0;
      right: auto;
      left: 0;
      transition-delay: 0.6s;
    }
    .effect-21 ~ .focus-border i:before,
    .effect-21 ~ .focus-border i:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 0;
      background-color: #3399ff;
      transition: 0.2s;
    }
    .effect-21 ~ .focus-border i:after {
      left: auto;
      right: 0;
      top: auto;
      bottom: 0;
      transition-delay: 0.4s;
    }
    .effect-21:focus ~ .focus-border:before,
    .effect-21:focus ~ .focus-border:after,
    .effect-21:not(:placeholder-shown):focus ~ .focus-border:before,
    .effect-21:not(:placeholder-shown):focus ~ .focus-border:after {
      width: 100%;
      transition: 0.2s;
      transition-delay: 0.6s;
    }
    .effect-21:focus ~ .focus-border:after,
    .effect-21:not(:placeholder-shown):focus ~ .focus-border:after {
      transition-delay: 0.2s;
    }
    .effect-21:focus ~ .focus-border i:before,
    .effect-21:focus ~ .focus-border i:after,
    .effect-21:not(:placeholder-shown):focus ~ .focus-border i:before,
    .effect-21:not(:placeholder-shown):focus ~ .focus-border i:after {
      height: 100%;
      transition: 0.2s;
    }
    .effect-21:focus ~ .focus-border i:after,
    .effect-21 ~ .focus-border i:after {
      transition-delay: 0.4s;
    }
    .effect-21 ~ label {
      position: absolute;
      left: 14px;
      width: 100%;
      top: 10px;
      color: #aaa;
      transition: 0.3s;
      z-index: -1;
      letter-spacing: 0.5px;
    }
    .effect-21:focus ~ label,
    .effect-21:not(:placeholder-shown) ~ label {
      top: -18px;
      left: 0;
      font-size: 12px;
      color: #3399ff;
      transition: 0.3s;
    }
    .effect-21:not(:placeholder-shown) ~ label {
      color: #aaa;
    }
    </pre>`,
  },
  effect22: {
    html: `<pre>
    &lt;div class="col-3 input-effect"&gt;
      &lt;input class="effect-22" type="text" placeholder=" " /&gt;
      &lt;label&gt;Effect 22&lt;/label&gt;
      &lt;span class="focus-bg"&gt;&lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-22 {
      border: 0;
      padding: 7px 15px;
      border: 1px solid #ccc;
      position: relative;
      background: transparent;
    }
    .effect-22 ~ .focus-bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      background-color: transparent;
      transition: 0.4s;
      z-index: -1;
    }
    .effect-22:focus ~ .focus-bg,
    .effect-22:not(:placeholder-shown):focus ~ .focus-bg {
      transition: 0.4s;
      width: 100%;
      background-color: #ededed;
    }
    .effect-22 ~ label {
      position: absolute;
      left: 14px;
      width: 100%;
      top: 10px;
      color: #aaa;
      transition: 0.3s;
      z-index: -1;
      letter-spacing: 0.5px;
    }
    .effect-22:focus ~ label,
    .effect-22:not(:placeholder-shown) ~ label {
      top: -18px;
      left: 0;
      font-size: 12px;
      color: #333;
      transition: 0.3s;
    }
    </pre>`,
  },
  effect23: {
    html: `<pre>
    &lt;div class="col-3 input-effect"&gt;
      &lt;input class="effect-23" type="text" placeholder=" " /&gt;
      &lt;label&gt;Effect 23&lt;/label&gt;
      &lt;span class="focus-bg"&gt;&lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-23 {
      border: 0;
      padding: 7px 15px;
      border: 1px solid #ccc;
      position: relative;
      background: transparent;
    }
    .effect-23 ~ .focus-bg:before,
    .effect-23 ~ .focus-bg:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 0;
      background-color: #ededed;
      transition: 0.3s;
      z-index: -1;
    }
    .effect-23:focus ~ .focus-bg:before,
    .effect-23:not(:placeholder-shown):focus ~ .focus-bg:before {
      transition: 0.3s;
      width: 50%;
      height: 100%;
    }
    .effect-23 ~ .focus-bg:after {
      left: auto;
      right: 0;
      top: auto;
      bottom: 0;
    }
    .effect-23:focus ~ .focus-bg:after,
    .effect-23:not(:placeholder-shown):focus ~ .focus-bg:after {
      transition: 0.3s;
      width: 50%;
      height: 100%;
    }
    .effect-23 ~ label {
      position: absolute;
      left: 14px;
      width: 100%;
      top: 10px;
      color: #aaa;
      transition: 0.3s;
      z-index: -1;
      letter-spacing: 0.5px;
    }
    .effect-23:focus ~ label,
    .effect-23:not(:placeholder-shown) ~ label {
      top: -18px;
      left: 0;
      font-size: 12px;
      color: #333;
      transition: 0.3s;
    }
    </pre>`,
  },
  effect24: {
    html: `<pre>
    &lt;div class="col-3 input-effect"&gt;
      &lt;input class="effect-24" type="text" placeholder=" " /&gt;
      &lt;label&gt;Effect 24&lt;/label&gt;
      &lt;span class="focus-bg"&gt;&lt;/span&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    input:focus {
      outline: none;
    }
    input[type="text"] {
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .col-3 {
      float: left;
      width: 27.33%;
      margin: 40px 3%;
      position: relative;
    }
    .effect-24 {
      border: 0;
      padding: 7px 15px;
      border: 1px solid #ccc;
      position: relative;
      background: transparent;
    }
    .effect-24 ~ .focus-bg:before,
    .effect-24 ~ .focus-bg:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 0;
      height: 0;
      background-color: #ededed;
      transition: 0.3s;
      z-index: -1;
    }
    .effect-24:focus ~ .focus-bg:before,
    .effect-24:not(:placeholder-shown):focus ~ .focus-bg:before {
      transition: 0.3s;
      width: 50%;
      left: 0;
      top: 0;
      height: 100%;
    }
    .effect-24 ~ .focus-bg:after {
      left: auto;
      right: 50%;
      top: auto;
      bottom: 50%;
    }
    .effect-24:focus ~ .focus-bg:after,
    .effect-24:not(:placeholder-shown):focus ~ .focus-bg:after {
      transition: 0.3s;
      width: 50%;
      height: 100%;
      bottom: 0;
      right: 0;
    }
    .effect-24 ~ label {
      position: absolute;
      left: 14px;
      width: 100%;
      top: 10px;
      color: #aaa;
      transition: 0.3s;
      z-index: -1;
      letter-spacing: 0.5px;
    }
    .effect-24:focus ~ label,
    .effect-24:not(:placeholder-shown) ~ label {
      top: -18px;
      left: 0;
      font-size: 12px;
      color: #333;
      transition: 0.3s;
    }
    </pre>`,
  },
};

export const ButtonEffects = {
  button1: {
    html: `<pre>
    &lt;button class="btn btn-effect-1"&gt;
      Button 1
    &lt;/button&gt;
    </pre>`,
    css: `<pre>
    .btn {
      position: relative;
      display: inline-block;
      border: none;
      outline: none;
      font-size: 1.4rem;
      border-radius: 0.25rem;
      background-color: rgb(179 179 179 / 56%);
      cursor: pointer;
      z-index: 1;
      margin: 10px;
      transition: 0.5s;
    }
    
    .btn:active {
      transform: scale(0.9);
    }
    .btn-effect-1::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      transition: width 0.3s ease-in-out;
      background-color: #343434;
      border-radius: 0.25rem;
      z-index: -1;
    }
    
    .btn-effect-1:hover {
      color: #f3f3f3;
    }
    
    .btn-effect-1:hover::before {
      width: 100%;
    }
    </pre>`,
  },
  button2: {
    html: `<pre>
    &lt;button class="btn btn-effect-2"&gt;
      Button 2
    &lt;/button&gt;
    </pre>`,
    css: `<pre>
    .btn {
      position: relative;
      display: inline-block;
      border: none;
      outline: none;
      font-size: 1.4rem;
      border-radius: 0.25rem;
      background-color: rgb(179 179 179 / 56%);
      cursor: pointer;
      z-index: 1;
      margin: 10px;
      transition: 0.5s;
    }
    .btn:active {
      transform: scale(0.9);
    }
    .btn-effect-2::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 0%;
      height: 100%;
      transition: width 0.3s ease-in-out;
      background-color: #343434;
      border-radius: 0.25rem;
      z-index: -2;
    }
    .btn-effect-2:hover {
      color: #f3f3f3;
    }
    .btn-effect-2:hover::before {
      width: 100%;
    }
    <pre/>`,
  },
  button3: {
    html: `<pre>
    &lt;button class="btn btn-effect-3"&gt;
      Button 3
    &lt;/button&gt;
    </pre>`,
    css: `<pre>
    .btn {
      position: relative;
      display: inline-block;
      border: none;
      outline: none;
      font-size: 1.4rem;
      border-radius: 0.25rem;
      background-color: rgb(179 179 179 / 56%);
      cursor: pointer;
      z-index: 1;
      margin: 10px;
      transition: 0.5s;
    }
    .btn:active {
      transform: scale(0.9);
    }
    .btn-effect-3::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 0%;
      transition: height 0.3s ease-in-out;
      background-color: #343434;
      border-radius: 0.25rem;
      z-index: -3;
    }
    .btn-effect-3:hover {
      color: #f3f3f3;
    }
    .btn-effect-3:hover::before {
      height: 100%;
    }
    <pre/>`,
  },
  button4: {
    html: `<pre>
    &lt;button class="btn btn-effect-4"&gt;
      Button 4
    &lt;/button&gt;
    </pre>`,
    css: `<pre>
    .btn {
      position: relative;
      display: inline-block;
      border: none;
      outline: none;
      font-size: 1.4rem;
      border-radius: 0.25rem;
      background-color: rgb(179 179 179 / 56%);
      cursor: pointer;
      z-index: 1;
      margin: 10px;
      transition: 0.5s;
    }
    
    .btn:active {
      transform: scale(0.9);
    }
    .btn-effect-4::before {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 0%;
      transition: height 0.3s ease-in-out;
      background-color: #343434;
      border-radius: 0.25rem;
      z-index: -4;
    }
    .btn-effect-4:hover {
      color: #f3f3f3;
    }
    .btn-effect-4:hover::before {
      height: 100%;
    }
    <pre/>`,
  },
  button5: {
    html: `<pre>
    &lt;button class="btn btn-effect-5"&gt;
      Button 5
    &lt;/button&gt;
    </pre>`,
    css: `<pre>
    .btn {
      position: relative;
      display: inline-block;
      border: none;
      outline: none;
      font-size: 1.4rem;
      border-radius: 0.25rem;
      background-color: rgb(179 179 179 / 56%);
      cursor: pointer;
      z-index: 1;
      margin: 10px;
      transition: 0.5s;
    }
    .btn:active {
      transform: scale(0.9);
    }
    .btn-effect-5 {
      overflow: hidden;
    }
    .btn-effect-5::before,
    .btn-effect-5::after {
      content: "";
      position: absolute;
      top: -50%;
      left: 0;
      width: 100%;
      height: 50%;
      background-color: #343434;
      border-radius: 0.25rem 0.25rem 0 0;
      z-index: -1;
      transition: top 0.5s ease-in-out;
    }
    .btn-effect-5::after {
      top: 100%;
      border-radius: 0 0 0.25rem 0.25rem;
    }
    .btn-effect-5:hover {
      color: #f3f3f3;
    }
    .btn-effect-5:hover::before {
      top: 0;
    }
    .btn-effect-5:hover::after {
      top: 50%;
    }
    <pre/>`,
  },
  button6: {
    html: `<pre>
    &lt;button class="btn btn-effect-6"&gt;
      Button 6
    &lt;/button&gt;
    </pre>`,
    css: `<pre>
    .btn {
      position: relative;
      display: inline-block;
      border: none;
      outline: none;
      font-size: 1.4rem;
      border-radius: 0.25rem;
      background-color: rgb(179 179 179 / 56%);
      cursor: pointer;
      z-index: 1;
      margin: 10px;
      transition: 0.5s;
    }
    .btn:active {
      transform: scale(0.9);
    }
    .btn-effect-6:hover {
      animation: animateX 0.6s linear infinite;
    }
    @keyframes animateX {
      0% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(-5px);
      }
      50% {
        transform: translateX(5px);
      }
      100% {
        transform: translateX(0);
      }
    }
    <pre/>`,
  },
  button7: {
    html: `<pre>
    &lt;button class="btn btn-effect-7"&gt;
      Button 7
    &lt;/button&gt;
    </pre>`,
    css: `<pre>
    .btn {
      position: relative;
      display: inline-block;
      border: none;
      outline: none;
      font-size: 1.4rem;
      border-radius: 0.25rem;
      background-color: rgb(179 179 179 / 56%);
      cursor: pointer;
      z-index: 1;
      margin: 10px;
      transition: 0.5s;
    }
    .btn:active {
      transform: scale(0.9);
    }
    .btn-effect-7:hover {
      animation: animateY 0.6s linear infinite;
    }
    @keyframes animateY {
      0% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(-5px);
      }
      50% {
        transform: translateY(5px);
      }
      100% {
        transform: translateY(0);
      }
    }
    <pre/>`,
  },
  button8: {
    html: `<pre>
    &lt;button class="btn btn-effect-8"&gt;
      Button 8
    &lt;/button&gt;
    </pre>`,
    css: `<pre>
    .btn {
      position: relative;
      display: inline-block;
      border: none;
      outline: none;
      font-size: 1.4rem;
      border-radius: 0.25rem;
      background-color: rgb(179 179 179 / 56%);
      cursor: pointer;
      z-index: 1;
      margin: 10px;
      transition: 0.5s;
    }
    
    .btn:active {
      transform: scale(0.9);
    }
    .btn-effect-8:hover {
      animation: pulse 0.5s linear infinite;
    }
    
    @keyframes pulse {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
      }
      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
      }
      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
      }
    }
    <pre/>`,
  },
  button9: {
    html: `<pre>
    &lt;div class="btn btn-effect-9"&gt;
      &lt;div class="top-face"&gt; Top Face &lt;/div&gt;
      &lt;div class="front-face"&gt; Front Face &lt;/div&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .btn {
      position: relative;
      display: inline-block;
      border: none;
      outline: none;
      font-size: 1.4rem;
      border-radius: 0.25rem;
      background-color: rgb(179 179 179 / 56%);
      cursor: pointer;
      z-index: 1;
      margin: 10px;
      transition: 0.5s;
    }
    .btn:active {
      transform: scale(0.9);
    }
    .btn-effect-9 {
      position: relative;
      transform-style: preserve-3d;
      border-radius: 0;
    }
    .btn-effect-9 .top-face,
    .btn-effect-9 .front-face {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease-in-out;
    }
    .btn-effect-9 .front-face {
      transform: translateZ(38.5px);
      background-color: #fff;
    }
    .btn-effect-9 .top-face {
      background-color: #343434;
      color: #f3f3f3;
      transform: rotateX(90deg) translateZ(38.5px);
    }
    .btn-effect-9:hover {
      transform: rotateX(-90deg);
      transition: 0.5s ease-in-out;
    }
    <pre/>`,
  },
  button10: {
    html: `<pre>
    &lt;div class="btn btn-effect-10"&gt;
      &lt;div class="top-face"&gt; Top Face &lt;/div&gt;
      &lt;div class="front-face"&gt; Front Face &lt;/div&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .btn {
      position: relative;
      display: inline-block;
      border: none;
      outline: none;
      font-size: 1.4rem;
      border-radius: 0.25rem;
      background-color: rgb(179 179 179 / 56%);
      cursor: pointer;
      z-index: 1;
      margin: 10px;
      transition: 0.5s;
    }
    
    .btn:active {
      transform: scale(0.9);
    }<pre/>`,
  },
  button11: {
    html: `<pre>
    &lt;div class="btn btn-effect-11"&gt;
      &lt;div class="frontFace"&gt;Front Face&lt;/div&gt;
      &lt;div class="leftFace"&gt;left Face&lt;/div&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .btn {
      position: relative;
      display: inline-block;
      border: none;
      outline: none;
      font-size: 1.4rem;
      border-radius: 0.25rem;
      background-color: rgb(179 179 179 / 56%);
      cursor: pointer;
      z-index: 1;
      margin: 10px;
      transition: 0.5s;
    }
    .btn:active {
      transform: scale(0.9);
    }
    .btn-effect-11 {
      width: 150px;
      height: 80px;
      transform-style: preserve-3d;
      transition: all 0.5s ease-in-out;
      padding: 0;
    }
    .btn-effect-11 > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease-in-out;
    }
    .btn-effect-11 .frontFace {
      transform: translateZ(38.5px);
      background-color: #fff;
    }
    .btn-effect-11 .leftFace {
      background-color: #343434;
      color: #f3f3f3;
      transform: rotateY(-90deg) translateZ(75px);
    }
    .btn-effect-11:hover {
      transform: rotateY(90deg);
      transition: 0.5s ease-in-out;
    }
    <pre/>`,
  },
  button12: {
    html: `<pre>
    &lt;div class="btn btn-effect-12"&gt;
      &lt;div class="frontFace"&gt;Front Face&lt;/div&gt;
      &lt;div class="rightFace"&gt;right Face&lt;/div&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .btn {
      position: relative;
      display: inline-block;
      border: none;
      outline: none;
      font-size: 1.4rem;
      border-radius: 0.25rem;
      background-color: rgb(179 179 179 / 56%);
      cursor: pointer;
      z-index: 1;
      margin: 10px;
      transition: 0.5s;
    }
    .btn:active {
      transform: scale(0.9);
    }
    .btn-effect-12 {
      width: 150px;
      height: 80px;
      transform-style: preserve-3d;
      transition: all 0.5s ease-in-out;
      padding: 0;
    }
    .btn-effect-12 > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease-in-out;
    }
    .btn-effect-12 .frontFace {
      transform: translateZ(38.5px);
      background-color: #fff;
    }
    .btn-effect-12 .rightFace {
      background-color: #343434;
      color: #f3f3f3;
      transform: rotateY(90deg) translateZ(75px);
    }
    .btn-effect-12:hover {
      transform: rotateY(-90deg);
      transition: 0.5s ease-in-out;
    }
    <pre/>`,
  },
  button13: {
    html: `<pre>
    &lt;div class="btn btn-effect-13"&gt;
      &lt;div class="frontFace"&gt;Front Face&lt;/div&gt;
      &lt;div class="backFace"&gt;back Face&lt;/div&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .btn {
      position: relative;
      display: inline-block;
      border: none;
      outline: none;
      font-size: 1.4rem;
      border-radius: 0.25rem;
      background-color: rgb(179 179 179 / 56%);
      cursor: pointer;
      z-index: 1;
      margin: 10px;
      transition: 0.5s;
    }
    .btn:active {
      transform: scale(0.9);
    }
    .btn-effect-13 {
      width: 150px;
      height: 80px;
      transform-style: preserve-3d;
      transition: all 0.5s ease-in-out;
      padding: 0;
    }
    .btn-effect-13 > div {
      z-index: 2;
      margin: 0px auto;
      padding: 10px;
      position: relative;
      width: 100%;
      height: 100%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease-in-out;
    }
    .btn-effect-13 .frontFace {
      z-index: 1;
      backface-visibility: hidden;
      background-color: #fff;
    }
    .btn-effect-13 .backFace {
      z-index: 2;
      transform: rotateY(180deg);
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      color: #fff;
      background-color: #343434;
    }
    .btn-effect-13:hover {
      transform: rotateY(180deg);
      transition: all 0.5s ease-in-out;
    }
    <pre/>`,
  },
  button14: {
    html: `<pre>
    &lt;button class="btn btn-effect-14"&gt;
      Button 14
    &lt;/button&gt;
    </pre>`,
    css: `<pre>
    .btn {
      position: relative;
      display: inline-block;
      border: none;
      outline: none;
      font-size: 1.4rem;
      border-radius: 0.25rem;
      background-color: rgb(179 179 179 / 56%);
      cursor: pointer;
      z-index: 1;
      margin: 10px;
      transition: 0.5s;
    }
    .btn:active {
      transform: scale(0.9);
    }
    .btn-effect-14:hover {
      animation: changeBG 2s ease-in-out infinite;
    }
    @keyframes changeBG {
      0% {
        background-color: #12d8fa;
      }
      25% {
        background-color: turquoise;
      }
      50% {
        background-color: yellowgreen;
      }
      75% {
        background-color: thistle;
      }
      100% {
        background-color: #12d8fa;
      }
    }`,
  },
  button15: {
    html: `<pre>
    &lt;button class="btn btn-effect-15"&gt;
      Button 15
    &lt;/button&gt;
    </pre>`,
    css: `<pre>
    .btn {
      position: relative;
      display: inline-block;
      border: none;
      outline: none;
      font-size: 1.4rem;
      border-radius: 0.25rem;
      background-color: rgb(179 179 179 / 56%);
      cursor: pointer;
      z-index: 1;
      margin: 10px;
      transition: 0.5s;
    }
    .btn:active {
      transform: scale(0.9);
    }
    .btn-effect-15 {
      background-image: linear-gradient(
        to right,
        #1fa2ff 0%,
        #12d8fa 51%,
        #1fa2ff 100%
      );
      background-size: 200% auto;
      color: #fff;
      transition: all 0.5s ease-in-out;
    }
    
    .btn-effect-15:hover {
      background-position: right;
    }
    </pre>`,
  },
  button16: {
    html: `<pre>
    &lt;button class="btn btn-effect-16"&gt;
      Button 16
    &lt;/button&gt;
    </pre>`,
    css: `<pre>
    .btn {
      position: relative;
      display: inline-block;
      border: none;
      outline: none;
      font-size: 1.4rem;
      border-radius: 0.25rem;
      background-color: rgb(179 179 179 / 56%);
      cursor: pointer;
      z-index: 1;
      margin: 10px;
      transition: 0.5s;
    }
    .btn:active {
      transform: scale(0.9);
    }
    .btn-effect-16 {
      position: relative;
      overflow: hidden;
    }
    .btn-effect-16::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100%;
      height: 4px;
      background-color: #343434;
      transform: translateX(-50%) scale(0);
      transition: transform 0.5s ease-in-out;
    }
    .btn-effect-16:hover::before {
      transform: translateX(-50%) scale(1);
    }
    </pre>`,
  },
  button17: {
    html: `<pre>
    &lt!-- but this Link in the head tag --&gt;
    &lt;link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
      crossorigin="anonymous"
    /&gt;
    &lt;button class="btn btn-effect-17"&gt;
      &lt;span&gt;
        Button 17 &lt;i class="fas fa-angle-right"&gt;&lt;/i&gt;
      &lt;/span&gt;
    &lt;/button&gt;
    </pre>`,
    css: `<pre>
    .btn {
      position: relative;
      display: inline-block;
      border: none;
      outline: none;
      font-size: 1.4rem;
      border-radius: 0.25rem;
      background-color: rgb(179 179 179 / 56%);
      cursor: pointer;
      z-index: 1;
      margin: 10px;
      transition: 0.5s;
    }
    .btn:active {
      transform: scale(0.9);
    }
    .btn-effect-17 span {
      position: relative;
      transition: 0.5s;
    }
    .btn-effect-17 span i {
      position: absolute;
      right: -1.5rem;
      opacity: 0;
      transition: all 0.5s ease;
    }
    .btn-effect-17:hover span {
      padding-right: 1.5rem;
    }
    .btn-effect-17:hover i {
      right: 0;
      opacity: 1;
    }
    <pre/>`,
  },
};

export const linkEffects = {
  linkEffect1: {
    html: `<pre>
    &lt;div class="link"&gt; 
      &lt;a href="#" class="linkEffect-1"&gt;
        Effect 1
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-1 {
      position: relative;
      overflow: hidden;
      transition: all 0.5s ease;
      background-image: linear-gradient(90deg, hsl(0, 100%, 10%), hsl(0, 100%, 10%)),
        linear-gradient(90deg, hsla(180, 100%, 50%, 0.5), hsla(180, 100%, 50%, 0.5));
      background-size: 50px 2px, 100% 2px;
      background-repeat: no-repeat;
      background-position-x: -50px, 0;
      background-position-y: 100%;
      transition: background-position-x 0.5s ease;
    }
    
    .linkEffect-1:hover {
      background-image: linear-gradient(90deg, hsl(0, 100%, 10%), hsl(0, 100%, 10%)),
        linear-gradient(90deg, hsla(180, 100%, 50%, 0.5), hsla(180, 100%, 50%, 0.5));
      background-position-x: calc(100% + 50px), 0;
    }
    </pre>`,
  },
  linkEffect2: {
    html: `<pre>
    &lt;div class="link"&gt; 
      &lt;a href="#" class="linkEffect-2"&gt;
        &lt;span&gt Effect 2 &lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-2 {
      position: relative;
    }
    
    .linkEffect-2::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1px; /*if the arrow line isn't centred (increase/decrease) the minus*/
      width: 115%;
      height: 1px;
      transform-origin: right;
      transform: scaleX(0);
      background: #646b8c;
      transition: transform 0.3s ease;
      z-index: 1;
    }
    
    .linkEffect-2:hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }
    
    .linkEffect-2 span {
      transform: rotate(-45deg);
      position: relative;
    }
    
    .linkEffect-2 span::before,
    .linkEffect-2 span::after {
      content: "";
      position: absolute;
      right: -19%;
      bottom: -4.5px;
      background: #646b8c;
      transition: transform 0.2s cubic-bezier(0.3, 1.5, 0.5, 1);
      transition-delay: 0.24s;
      z-index: 2;
    }
    
    .linkEffect-2 span::before {
      width: 1px;
      height: 6px;
      transform-origin: 0% 100%;
      transform: rotate(-90deg);
    }
    
    .linkEffect-2 span::after {
      height: 1px;
      width: 6px;
      transform-origin: 100% 0%;
      transform: translateX(-1px) rotate(0deg);
    }
    
    .linkEffect-2:hover span::before {
      transform: rotate(-45deg);
    }
    
    .linkEffect-2:hover span::after {
      transform: translateX(-1px) rotate(-45deg);
    }
    
    .linkEffect-2:hover span {
      transform: rotate(-45deg);
    }
    <pre/>`,
  },
  linkEffect3: {
    html: `<pre>
    &lt;div class="link"&gt; 
      &lt;a href="#" class="linkEffect-3"&gt;
        Effect 3
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-3 {
      position: relative;
    }
    .linkEffect-3::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      bottom: -2px;
      transform-origin: 100% 50%;
      transform: scale3d(0, 1, 1);
      transition: transform 0.3s;
      background-color: #646b8c;
    }
    
    .linkEffect-3:hover::before {
      transform-origin: 0% 50%;
      transform: scale3d(1, 1, 1);
    }
    <pre/>`,
  },
  linkEffect4: {
    html: `<pre>
    &lt;div class="link"&gt; 
      &lt;a href="#" class="linkEffect-4"&gt;
        Effect 4
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-4 {
      position: relative;
    } 

    .linkEffect-4::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #646b8c;
      left: 0;
      bottom: -6px;
      transform-origin: 100% 50%;
      transform: scale3d(0, 1, 1);
      transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
    }
    .linkEffect-4:hover::before {
      transform-origin: 0% 50%;
      transform: scale3d(1, 1, 1);
      transition-timing-function: cubic-bezier(0.4, 1, 0.8, 1);
    }
    .linkEffect-4::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #646b8c;
      left: 0;
      bottom: -2px;
      transform: scale3d(0, 1, 1);
      transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
    }
    .linkEffect-4:hover::after {
      transform-origin: 100% 50%;
      transform: scale3d(1, 1, 1);
      transition-timing-function: cubic-bezier(0.4, 1, 0.8, 1);
    }
    <pre/>`,
  },
  linkEffect5: {
    html: `<pre>
    &lt;div class="link"&gt; 
      &lt;a href="#" class="linkEffect-5"&gt;
        Effect 5
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-5 {
      position: relative;
    }
    
    .linkEffect-5::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      left: 0;
      bottom: 0;
      background-color: #646b8c;
      transform-origin: 100% 50%;
      transform: scale3d(0, 1, 1);
      transition: transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
    }
    
    .linkEffect-5:hover::before {
      transform-origin: 0% 50%;
      transform: scale3d(1, 2, 1);
      transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
    }
    
    .linkEffect-5::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 100%;
      height: 1px;
      background-color: #646b8c;
      transform-origin: 100% 50%;
      transform: scale3d(0, 1, 1);
      transition: transform 0.4s 0.1s cubic-bezier(0.2, 1, 0.8, 1);
    }
    
    .linkEffect-5:hover::after {
      transform-origin: 0% 50%;
      transform: scale3d(1, 1, 1);
      transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
    }
    <pre/>`,
  },
  linkEffect6: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-6"&gt;
        &lt;span&gt; Effect 6 &lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-6 {
      position: relative;
    }
    
    .linkEffect-6::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #646b8c;
      left: 0;
      bottom: 0;
      transform-origin: 50% 100%;
      transition: clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
      clip-path: polygon(
        0% 0%,
        0% 100%,
        0 100%,
        0 0,
        100% 0,
        100% 100%,
        0 100%,
        0 100%,
        100% 100%,
        100% 0%
      );
    }
    
    .linkEffect-6:hover::before {
      transform: translate3d(0, 2px, 0) scale3d(1.08, 3, 1);
      clip-path: polygon(
        0% 0%,
        0% 100%,
        50% 100%,
        50% 0,
        50% 0,
        50% 100%,
        50% 100%,
        0 100%,
        100% 100%,
        100% 0%
      );
    }
    
    .linkEffect-6 span {
      display: inline-block;
      transition: transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
    }
    
    .linkEffect-6:hover span {
      transform: translate3d(0, -2px, 0);
    }
    <pre/>`,
  },
  linkEffect7: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-7"&gt;
        Effect 7
      &lt;/a&gt
    &lt;/div&gt;;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-7 {
      position: relative;
    }
    
    .linkEffect-7::before,
    .linkEffect-7::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #646b8c;
      bottom: 0;
      left: 0;
      opacity: 0;
      transform-origin: 50% 0%;
      transform: translate3d(0, 3px, 0);
      transition-property: transform, opacity;
      transition-duration: 0.3s;
      transition-timing-function: cubic-bezier(0.2, 1, 0.8, 1);
    }
    
    .linkEffect-7:hover::before,
    .linkEffect-7:hover::after {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transition-timing-function: cubic-bezier(0.2, 0, 0.3, 1);
    }
    
    .linkEffect-7::after {
      bottom: -4px;
      width: 70%;
      left: 18%;
    }
    
    .linkEffect-7::before,
    .linkEffect-7:hover::after {
      transition-delay: 0.1s;
    }
    
    .linkEffect-7:hover::before {
      transition-delay: 0s;
    }
    <pre/>`,
  },
  linkEffect8: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-8"&gt;
        Effect 8
      &lt;/a&gt
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-8 {
      position: relative;
    }
    .linkEffect-8::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 10px;
      top: 100%;
      background-color: #646b8c;
      opacity: 0;
    }
    .linkEffect-8:hover::before {
      opacity: 1;
      animation: lineUp 0.3s ease forwards;
    }
    @keyframes lineUp {
      0% {
        transform-origin: 50% 100%;
        transform: scale3d(1, 0.045, 1);
      }
    
      50% {
        transform-origin: 50% 100%;
        transform: scale3d(1, 1, 1);
      }
    
      51% {
        transform-origin: 50% 0%;
        transform: scale3d(1, 1, 1);
      }
    
      100% {
        transform-origin: 50% 0%;
        transform: scale3d(1, 0.045, 1);
      }
    }
    .linkEffect-8::after {
      content: "";
      position: absolute;
      background-color: #646b8c;
      transition: opacity 0.3s;
      opacity: 0;
      transition-delay: 0s;
    }
    .linkEffect-8:hover::after {
      opacity: 1;
      transition-delay: 0.3s;
    }
    <pre/>`,
  },
  linkEffect9: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-9"&gt;
        Effect 9
      &lt;/a&gt
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-9 {
      position: relative;
    }
    
    .linkEffect-9::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #646b8c;
      transform-origin: 0% 50%;
      transform: scale3d(0, 1, 1);
      transition: transform 0.3s;
    }
    
    .linkEffect-9:hover::before {
      transform: scale3d(1, 1, 1);
    }
    
    .linkEffect-9::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #646b8c;
      transition: transform 0.3s;
      transform-origin: 100% 50%;
    }
    
    .linkEffect-9:hover::after {
      transform: scale3d(0, 1, 1);
    }
    <pre/>`,
  },
  linkEffect10: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-10"&gt;
        Effect 10
      &lt;/a&gt
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-10 {
      position: relative;
      padding: 10px;
    }
    
    .linkEffect-10::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      left: 0;
      background-color: #646b8c;
      opacity: 0;
    }
    
    .linkEffect-10:hover::before {
      opacity: 1;
      animation: coverUp 0.3s ease forwards;
    }
    
    @keyframes coverUp {
      0% {
        transform-origin: 50% 100%;
        transform: scale3d(1, 0.045, 1);
      }
    
      50% {
        transform-origin: 50% 100%;
        transform: scale3d(1, 1, 1);
      }
    
      51% {
        transform-origin: 50% 0%;
        transform: scale3d(1, 1, 1);
      }
    
      100% {
        transform-origin: 50% 0%;
        transform: scale3d(1, 0.045, 1);
      }
    }
    
    .linkEffect-10::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      background-color: #646b8c;
      transition: opacity 0.3s;
    }
    
    .linkEffect-10:hover::after {
      opacity: 0;
    }
    <pre/>`,
  },
  linkEffect11: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-11"&gt;
        &lt;span&gt; Effect 11 &lt;/span&gt;
        &lt;svg&gt;
          class="linkWave linkWave--slide"
          width="300%"
          height="100%"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
        >
          &lt;path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0">&lt;/path&gt;
        &lt;/svg&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-11 {
      font-family: lust-fine, sans-serif;
      overflow: hidden;
      padding: 7px 0;
    }
    
    .linkWave {
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
      fill: none;
      stroke: #000;
      stroke-width: 1px;
    }
    
    .linkWave--slide {
      top: -3px;
      stroke-width: 2px;
      transition: transform 0.7s;
      transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
    }
    
    .linkEffect-11:hover .linkWave--slide {
      transform: translate3d(-66.6%, 0, 0);
    }
    <pre/>`,
  },
  linkEffect12: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-12"&gt;
        &lt;span&gt; Effect 12 &lt;/span&gt;
        &lt;svg&gt;
          class="linkHalfWave linkHalfWave--stroke linkHalfWave--arc"
          width="100%"
          height="18"
          viewBox="0 0 59 18"
        >
          &lt;path&gt;
            d="M.945.149C12.3 16.142 43.573 22.572 58.785 10.842"
            pathLength="1"
          />
        &lt;/svg&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-12 {
      position: relative;
    }
    
    .linkEffect-12 {
      position: relative;
      padding: 7px 0;
    }
    
    .linkEffect-12::before {
      display: none;
    }
    
    .linkHalfWave {
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
      fill: none;
      stroke: #000;
      stroke-width: 1px;
    }
    
    .linkHalfWave--slide {
      top: -3px;
      stroke-width: 2px;
      transition: transform 0.7s;
      transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
    }
    
    .linkHalfWave--stroke path {
      stroke-dasharray: 1;
      stroke-dashoffset: 1;
    }
    
    .linkEffect-12:hover .linkHalfWave--stroke path {
      stroke-dashoffset: 0;
    }
    
    .linkHalfWave--arc {
      top: 73%;
      left: -23%;
    }
    .linkHalfWave--arc path {
      transition: stroke-dashoffset 0.4s cubic-bezier(0.7, 0, 0.3, 1);
    }
    .linkEffect-12:hover .linkHalfWave--arc path {
      transition-timing-function: cubic-bezier(0.8, 1, 0.7, 1);
      transition-duration: 0.3s;
    }
    <pre/>`,
  },
  linkEffect13: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-13"&gt;
        &lt;span&gt; Effect 13 &lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-13 {
      position: relative;
    }
    
    .linkEffect-13::before {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: #646b8c;
      height: 7px;
      border-radius: 20px;
      transform: scale3d(1, 1, 1);
      transition: transform 0.2s, opacity 0.2s;
      transition-timing-function: cubic-bezier(0.2, 0.57, 0.67, 1.53);
    }
    
    .linkEffect-13:hover::before {
      transition-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
      transition-duration: 0.4s;
      opacity: 1;
      transform: scale3d(1.2, 0.1, 1);
    }
    
    .linkEffect-13 span {
      transform: translate3d(0, -4px, 0);
      display: inline-block;
      transition: transform 0.2s 0.05s cubic-bezier(0.2, 0.57, 0.67, 1.53);
    }
    
    .linkEffect-13:hover span {
      transform: translate3d(0, 0, 0);
      transition-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
      transition-duration: 0.4s;
      transition-delay: 0s;
    }
    <pre/>`,
  },
  linkEffect14: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-14"&gt;
        Effect 14
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-14 {
      position: relative;
    }
    
    .linkEffect-14::before {
      content: "";
      position: absolute;
      background: linear-gradient(to bottom, transparent 62%, #646b8c 0) center
        center/0% 75% no-repeat;
      cursor: pointer;
      border-radius: 3px;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 4px;
      transition: background-size 0.4s ease;
    }
    
    .linkEffect-14:hover::before {
      background-size: 100% 100%;
    }
    
    .linkEffect-14:active::before {
      background-size: 80% 100%;
    } 
    </pre>`,
  },
  linkEffect15: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-15"&gt;
        Effect 15
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-15 {
      position: relative;
      text-decoration: none;
      display: inline-block;
      color: black;
      padding: 10px;
      transition: color ease 0.3s;
    }
    
    .linkEffect-15::after {
      content: "";
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 5%;
      left: 0;
      bottom: 0;
      background-color: #646b8c;
      transition: all ease 0.3s;
    }
    
    .linkEffect-15:hover {
      color: white;
    }
    
    .linkEffect-15:hover::after {
      height: 100%;
    }
    </pre>`,
  },
  linkEffect16: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-16"&gt;
        &lt;span&gt; Effect 16 &lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-16 {
      position: relative;
      padding: 10px;
    }
    
    .linkEffect-16::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #646b8c;
      opacity: 0;
      box-sizing: border-box;
      transform: scale(0.5);
      transition: all 0.3s ease;
    }
    
    .linkEffect-16:hover::before {
      opacity: 1;
      transform: scale(1);
    }
    </pre>`,
  },
  linkEffect17: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-17"&gt;
        Effect 17
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-17 {
      position: relative;
      padding: 0 10px;
    }
    
    .linkEffect-17::before,
    .linkEffect-17::after {
      content: "";
      position: absolute;
      width: 2px;
      height: 100%;
      background: #646b8c;
      opacity: 0;
      transition: all 0.3s;
    }
    
    .linkEffect-17::before {
      left: 0;
      top: -80%;
    }
    
    .linkEffect-17:hover::before {
      top: 0;
      opacity: 1;
    }
    
    .linkEffect-17::after {
      right: 0;
      bottom: -80%;
    }
    
    .linkEffect-17:hover::after {
      bottom: 0;
      opacity: 1;
    }
    <pre/>`,
  },
  linkEffect18: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-18"&gt;
        Effect 18
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-18 {
      position: relative;
      padding: 0 10px;
    }
    
    .linkEffect-18::before,
    .linkEffect-18::after {
      position: absolute;
      top: 0;
      content: "";
      width: 2px;
      height: 100%;
      background: #646b8c;
      opacity: 0;
      transform: rotate(90deg);
      transition: all 0.3s;
    }
    
    .linkEffect-18::before {
      left: 0;
      transform-origin: 0 0;
    }
    
    .linkEffect-18::after {
      right: 0;
      transform-origin: 100% 100%;
    }
    
    .linkEffect-18:hover::before,
    .linkEffect-18:hover::after {
      opacity: 1;
      transform: rotate(0);
    }
    <pre/>`,
  },
  linkEffect19: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-19"&gt;
        Effect 19
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-19 {
      position: relative;
      padding: 10px;
    }
    
    .linkEffect-19::before,
    .linkEffect-19::after {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 100%;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s;
    }
    
    .linkEffect-19::before {
      top: -50%;
      border-top: 2px solid #646b8c;
      border-left: 2px solid #646b8c;
    }
    
    .linkEffect-19::after {
      top: 50%;
      border-right: 2px solid #646b8c;
      border-bottom: 2px solid #646b8c;
    }
    
    .linkEffect-19:hover::before,
    .linkEffect-19:hover::after {
      top: 0;
      opacity: 1;
    }
    <pre/>`,
  },
  linkEffect20: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-20"&gt;
        Effect 20
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-20 {
      position: relative;
      padding: 10px;
    }
    
    .linkEffect-20::before,
    .linkEffect-20::after {
      position: absolute;
      content: "";
      left: 0;
      width: 100%;
      height: 2px;
      background: #646b8c;
      opacity: 0;
    }
    
    .linkEffect-20::before {
      top: 0;
      transition: all 0.4s;
      transition-delay: 0.1s;
    }
    
    .linkEffect-20::after {
      bottom: 0;
      transition: all 0.4s;
    }
    
    .linkEffect-20:hover::before,
    .linkEffect-20:hover::after {
      opacity: 1;
    }
    <pre/>`,
  },
  linkEffect21: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-21"&gt;
        Effect 21
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-21 {
      position: relative;
      padding: 10px;
    }
    
    .linkEffect-21::before,
    .linkEffect-21::after {
      position: absolute;
      content: "";
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background: #646b8c;
      opacity: 0;
      transition: all 0.3s;
    }
    
    .linkEffect-21:hover::before {
      top: 0;
      opacity: 1;
    }
    
    .linkEffect-21:hover::after {
      top: 100%;
      opacity: 1;
    }
    <pre/>`,
  },
  linkEffect22: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-22"&gt;
        Effect 22
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-22 {
      position: relative;
      padding: 10px;
    }
    
    .linkEffect-22::before,
    .linkEffect-22::after {
      position: absolute;
      content: "";
      left: 0;
      width: 100%;
      height: 0;
      border-left: 2px solid #646b8c;
      border-right: 2px solid #646b8c;
      transition: all 0.3s;
    }
    
    .linkEffect-22::before {
      top: 0;
      border-top: 2px solid #646b8c;
    }
    
    .linkEffect-22::after {
      bottom: 0;
      border-bottom: 2px solid #646b8c;
    }
    
    .linkEffect-22:hover::before,
    .linkEffect-22:hover::after {
      height: 40%;
    }
    <pre/>`,
  },
  linkEffect23: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a
        href="#"
        class="linkEffect-23"
        data-hover="Effect 23"
      >
        &lt;span>Effect 23&lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-23 {
      position: relative;
      overflow: hidden;
    }
    
    .linkEffect-23 span {
      position: relative;
      display: inline-block;
      padding: 10px;
      margin: 2px;
      background-color: #fff;
    }
    
    .linkEffect-23::after {
      content: attr(data-hover);
      position: absolute;
      color: #7356cd;
      width: 0%;
      height: 100%;
      top: 0;
      left: 0;
      margin: 12px;
      white-space: nowrap;
      overflow: hidden;
      transition: width 0.3s ease-in-out;
    }
    
    .linkEffect-23::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: #7356cd;
      transform: translateX(-103%);
      transition: transform 0.3s ease-in-out;
    }
    
    .linkEffect-23:hover::before {
      transform: translateX(0);
    }
    
    .linkEffect-23:hover::after {
      width: 100%;
    }
    </pre>`,
  },
  linkEffect24: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a
        href="#"
        class="linkEffect-24"
        data-hover="Effect 24"
      >
        &lt;span>Effect 24&lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-24 {
      position: relative;
      overflow: hidden;
    }
    
    .linkEffect-24 span {
      position: relative;
      display: inline-block;
      padding: 10px;
      margin: 2px;
      background-color: #fff;
    }
    
    .linkEffect-24::after {
      content: attr(data-hover);
      position: absolute;
      color: #7356cd;
      width: 0%;
      height: 100%;
      top: 0;
      left: 0;
      margin: 12px;
      white-space: nowrap;
      overflow: hidden;
      transition: width 0.3s ease-in-out;
    }
    
    .linkEffect-24::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: #7356cd;
      transform: translateY(-103%);
      transition: transform 0.3s ease-in-out;
    }
    
    .linkEffect-24:hover::before {
      transform: translateX(0);
    }
    
    .linkEffect-24:hover::after {
      width: 100%;
    }
    </pre>`,
  },
  linkEffect25: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-25"&gt;
        &lt;span&gt; Effect 25 &lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-25 {
      position: relative;
      display: inline-block;
      overflow: hidden;
      padding: 10px;
    }
    
    .linkEffect-25::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 100%;
      background-color: #646b8c;
      transform: translateX(-105%);
      transition: transform 0.3s ease-in-out;
    }
    .linkEffect-25::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      height: 2px;
      width: 100%;
      background-color: #646b8c;
      transform: translateX(105%);
      transition: transform 0.3s ease-in-out;
    }
    
    .linkEffect-25:hover::after,
    .linkEffect-25:hover::before {
      transform: translateX(0);
    }
    </pre>`,
  },
  linkEffect26: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-26"&gt;
        &lt;span&gt; Effect 26 &lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-26 {
      position: relative;
      display: inline-block;
      overflow: hidden;
      padding: 0.5rem 0.75rem;
    }
    
    .linkEffect-26 span::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0%;
      width: 2px;
      background-color: #646b8c;
      transition: height 0.5s ease-in-out;
    }
    .linkEffect-26 span::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      height: 0%;
      width: 2px;
      background-color: #646b8c;
      transition: height 0.5s ease-in-out;
    }
    
    .linkEffect-26::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 100%;
      background-color: #646b8c;
      transform: translateX(-105%);
      transition: transform 0.3s ease-in-out;
    }
    
    .linkEffect-26::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      height: 2px;
      width: 100%;
      background-color: #646b8c;
      transform: translateX(105%);
      transition: transform 0.3s ease-in-out;
    }
    
    .linkEffect-26:hover::after,
    .linkEffect-26:hover::before {
      transform: translateX(0);
    }
    
    .linkEffect-26:hover span::before,
    .linkEffect-26:hover span::after {
      height: 100%;
    }
    <pre/>`,
  },
  linkEffect27: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-27"&gt;
        &lt;span&gt; Effect 27 &lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-27 {
      position: relative;
      display: inline-block;
      overflow: hidden;
      padding: 10px;
    }
    
    .linkEffect-27 span::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 0%;
      width: 2px;
      background-color: #646b8c;
      transition: height 0.3s ease-in-out;
      transition-delay: 0s;
    }
    
    .linkEffect-27 span::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      height: 0%;
      width: 2px;
      background-color: #646b8c;
      transition: height 0.3s ease-in-out;
      transition-delay: 0.6s;
    }
    
    .linkEffect-27::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 100%;
      background-color: #646b8c;
      transform: translateX(-105%);
      transition: transform 0.3s ease-in-out;
      transition-delay: 0.9s;
    }
    
    .linkEffect-27::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      height: 2px;
      width: 100%;
      background-color: #646b8c;
      transform: translateX(105%);
      transition: transform 0.3s ease-in-out;
      transition-delay: 0.3s;
    }
    
    .linkEffect-27:hover::before {
      transform: translateX(0);
      transition-delay: 0s;
    }
    
    .linkEffect-27:hover span::after {
      height: 100%;
      transition-delay: 0.3s;
    }
    
    .linkEffect-27:hover::after {
      transform: translateX(0);
      transition-delay: 0.6s;
    }
    
    .linkEffect-27:hover span::before {
      height: 100%;
      transition-delay: 0.9s;
    }
    <pre/>`,
  },
  linkEffect28: {
    html: `<pre>
    &lt;div class="link"&gt;
      &lt;a href="#" class="linkEffect-28"&gt;
        &lt;span&gt; Effect 28 &lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    </pre>`,
    css: `<pre>
    .link {
      box-shadow: 4px 4px 12px 1px #00000059;
      padding: 20px;
      width: 150px;
      height: 80px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
      font-size: 18px;
    }
    .linkEffect-28 {
      position: relative;
      padding: 10px;
    }
    
    .linkEffect-28::after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%) scale(0);
      transition: transform 0.3s ease-in-out;
      height: 2px;
      width: 100%;
      background-color: #646b8c;
    }
    .linkEffect-28::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) scale(0);
      transition: transform 0.3s ease-in-out;
      height: 2px;
      width: 100%;
      background-color: #646b8c;
    }
    
    .linkEffect-28:hover::before,
    .linkEffect-28:hover::after {
      transform: translateX(-50%) scale(1);
    }
    <pre/>`,
  },
};
