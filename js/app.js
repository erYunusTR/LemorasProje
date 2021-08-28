const list = [
    {
        "name": "Fatma",
        "surname": "Acar",
        "number": 202101,
        "skills": ["Matematik", "Resim", "Fizik"]
    },
    {
        "name": "Atahan",
        "surname": "Adanır",
        "number": 202102,
        "skills": ["Müzik", "Kimya", "Edebiyat"]
    },
    {
        "name": "Cihan",
        "surname": "Akaş",
        "number": 202103,
        "skills": ["Sosyal", "Din", "Kimya"]
    },
    {
        "name": "Mehmetcan",
        "surname": "Akbilmez",
        "number": 202104,
        "skills": ["Resim", "Kimya", "Biyoloji"]
    },
    {
        "name": "Recep",
        "surname": "Akıncılar",
        "number": 202105,
        "skills": ["Beden", "Fizik"]
    },
    {
        "name": "Berker",
        "surname": "Akkiray",
        "number": 202106,
        "skills": ["Felsefe"]
    },
]


list.forEach((entry) => {
    console.log(entry);
    let li = document.getElementById("students");
    li.innerHTML += '<tr><td>' + entry.number + '</td><td>' + entry.name + '</td><td>' + entry.surname + '</td><td><i class="fa fa-eye studentSkill" title="' + entry.skills.join(", ") + '"></i></td></tr>'
});


