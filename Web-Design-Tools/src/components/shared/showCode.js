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
    &lt;div className="btn btn-effect-9"&gt;
      &lt;div className="top-face"&gt; Top Face &lt;/div&gt;
      &lt;div className="front-face"&gt; Front Face &lt;/div&gt;
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
    &lt;div className="btn btn-effect-10"&gt;
      &lt;div className="top-face"&gt; Top Face &lt;/div&gt;
      &lt;div className="front-face"&gt; Front Face &lt;/div&gt;
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
    &lt;div className="btn btn-effect-11"&gt;
      &lt;div className="frontFace"&gt;Front Face&lt;/div&gt;
      &lt;div className="leftFace"&gt;left Face&lt;/div&gt;
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
    &lt;div className="btn btn-effect-12"&gt;
      &lt;div className="frontFace"&gt;Front Face&lt;/div&gt;
      &lt;div className="rightFace"&gt;right Face&lt;/div&gt;
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
    &lt;div className="btn btn-effect-13"&gt;
      &lt;div className="frontFace"&gt;Front Face&lt;/div&gt;
      &lt;div className="backFace"&gt;back Face&lt;/div&gt;
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
