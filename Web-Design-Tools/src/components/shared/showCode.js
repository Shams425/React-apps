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
