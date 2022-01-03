var sum = 750*9433.34 + 120*10354.03;
var amount = prompt('Alisherjon soqqani miqdorini so`mda kiriting kiriting ,Agar "yo`q" desayiz dollarda ham bo`laveradi: ');
if(amount==='yo`q'){
    amount=prompt('A mayli qo`ymadiz, tezroq kirita qoling endi :');
    amount-0;
    amount*=9433.34;
}

amount-0;

if(sum<=amount){
    alert('Alisherjon yaxshi dam olib keling. \nBizga sovg`a olish esdan chiqmasin lekin <^>')
}else{
    alert('Alisherjon ozgina sabr qilasiz ekan !!!')
}
