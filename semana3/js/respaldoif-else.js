//versión 1
if (imc >= 35) {
    clasificacion = 'Obesidad mórbida';
} else {
    if (imc >= 30) {
        clasificacion = 'Obesidad';
    } else {
        if (imc >= 25) {
            clasificacion = 'Sobrepeso';
        } else {
            if (imc >= 18.5) {
                clasificacion = 'Normal';
            } else {
                clasificacion = 'Bajo de peso';
            }
        }
    }
}