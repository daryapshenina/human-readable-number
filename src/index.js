module.exports = function toReadable (number) {
  let numbers =['','one','two','three','four','five','six','seven','eight', 'nine',
      'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let dozens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

  let elem = String(number).split('');
  if (number ==0){
    return 'zero';
  }

  if (number<10){
      return numbers[elem[0]];
  }
    if ((number>=10)&&(number<20)){
        let teen = (elem[0]+elem[1]);
        return numbers[teen];
    }

  if(number<100){
      let tail = (elem[1]!=0)?numbers[elem[1]] :'';

      return  (tail)?(dozens[elem[0]] +' '+tail):dozens[elem[0]];
  }
  if(number<1000){
      let doz = (elem[1]+elem[2]);
      let tail2 = (elem[2]!=0)?' '+numbers[(elem[2])] : '';
      let dozen = '';
      if (elem[1]>1){
          dozen =' '+dozens[elem[1]] + tail2;
      }
      if (elem[1]==1){
          dozen =' '+numbers[doz];
      }
      if (elem[1]==0){
          dozen = (tail2!='')?tail2:'';
      }


      return numbers[elem[0]] + ' hundred' + dozen;
  }
}
