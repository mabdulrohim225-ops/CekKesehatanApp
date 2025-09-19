// Fungsi Hitung BMR
function calcBMR({weight, height, age, gender}) {
  if (gender === 'Laki-laki') {
    return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }
}

// Faktor Aktivitas
const activityFactors = {
  'Sangat Ringan': 1.2,
  'Ringan': 1.375,
  'Sedang': 1.55,
  'Berat': 1.725,
  'Sangat Berat': 1.9
};

// Fungsi Hitung TDEE
function calcTDEE({weight, height, age, gender, activity}) {
  const bmr = calcBMR({weight, height, age, gender});
  const factor = activityFactors[activity] || 1.2;
  return Math.round(bmr * factor);
}

// Event Submit Form
document.getElementById("formGizi").addEventListener("submit", function(e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById("berat").value);
  const height = parseFloat(document.getElementById("tinggi").value);
  const age = parseInt(document.getElementById("usia").value);
  const gender = document.getElementById("gender").value;
  const activity = document.getElementById("aktivitas").value;

  const kebutuhanEnergi = calcTDEE({weight, height, age, gender, activity});

  document.getElementById("hasil").innerHTML = `
    <strong>Hasil Perhitungan:</strong><br>
    Kebutuhan energi harianmu adalah <b>${kebutuhanEnergi} kkal</b>.<br><br>
    💡 <i>Tips:</i> Sesuaikan pola makan seimbang, perbanyak minum air, dan lakukan aktivitas fisik teratur.
  `;
});
