function humanNumInit(){
  highRange = 100;
  lowRange = 1;
  humanNum();
};

function compNumInit(){
  computerNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  compNum();
};