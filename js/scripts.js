var 
a = 5,
b = 10,
value = (a * a) + (2 * a * b) - (b * b);

console.log( value );

if (value < 0) {
	valueResult = 'wynik ujemny'
}
if (value > 0) {
	valueResult = 'wynik dodatni'
}

console.log( valueResult);

if (value >= 0) {
	console.log( 'Liczba ' + value + ' jest liczbą dodatnią.' ); }

if (value <= 0) {
	console.log( 'Liczba ' + value + ' jest liczbą ujemną.' ); }


if (value = 0) {
	console.log( 'Wynik jest równy 0'); }
else {
	console.log( 'Wynik nie jest równy 0'); }

// Poza zadaniem
 
if ( !(value = 25)) {
	console.log( value + 'jest równe 25'); }
else {
	console.log('OPERATOR NEGACJI: ' + value + ' nie jest równe 25'); }


if ( (b < a) && (value > b)) {
	console.log('ŁĄCZNIK i: ' + b +  ' jest mniejsze niż ' + a + ' , ' + value + ' jest mniejsze niż ' + b); }
else if ( (b > a) && (value > b)) {
	console.log('ŁĄCZNIK i:  ' + b + ' jest większe niż ' + a + ' , ' + value + ' jest większe niż ' + b); }
else {
	console.log( b + '=' + a);}


// switch 

switch(value) {
  case 1:
    console.log(value + ' /5= ' + b)
    break;
  case 2:
    console.log(value + ' /5= ' + value)
    break;
  case 25:
    console.log(value + ' / 5 = ' + a)
  default:
    console.log(value/10) // default wyświetli się, ponieważ nie dałem ,,break".
}

// short if

IsValueBiggerThan = value > b ? value + ' jest większe niż ' + b : value + ' jest mniejsze niż ' + b;
console.log( IsValueBiggerThan );


