$(document).ready(function () {

    $('#firstExam, #secondExam, #thirdExam, #fourthExam, #fifthExam').keyup(function limit() {
        if(parseFloat(this.value)>20){ 
            this.value =20;
        } 
        else if(parseFloat(this.value)<0) {
            this.value =0;
        }
    });

    $('#result').click(function calcul() {
        var firstExam = document.getElementById('firstExam').value;
        var secondExam = document.getElementById('secondExam').value;
        var thirdExam = document.getElementById('thirdExam').value;
        var fourthExam = document.getElementById('fourthExam').value;
        var fifthExam = document.getElementById('fifthExam').value;
        var average = (Number(firstExam) + Number(secondExam) + Number(thirdExam) + Number(fourthExam) + Number(fifthExam))/5;
        $('#average').html('Vous avez une moyenne de ' + average + '/20');
        if (average >= 0 && average < 10) {
            $('#commentary').css('color', 'red')
            $('#commentary').html('En dessous de la moyenne.')
        }
        else if (average >= 10 && average < 13) {
            $('#commentary').css('color', 'coral')
            $('#commentary').html('Moyen.')
        }
        else if (average >= 13 && average < 16) {
            $('#commentary').css('color', 'green')
            $('#commentary').html('Bien.')
        }
        else if (average >= 16 && average < 20) {
            $('#commentary').css('color', 'darkgreen')
            $('#commentary').html('Très bien.')
        }
        else if (average == 20) {
            $('#commentary').css('color', 'blue')
            $('#commentary').html('Excellent.')
        }
        else if (Number(firstExam) == '' || Number(secondExam) == '' || Number(thirdExam) == '' || Number(fourthExam) == '' || Number(fifthExam) == '' ) {
            $('#commentary').html('Vous n\'avez pas rempli toutes vos notes.');
        }
    });
});