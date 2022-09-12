const now =  new Date()
now.getDay();

export var Data = [
    {
        "title": "Work",
        start: new Date(now.getFullYear(), now.getMonth(),13, 7),
        end: new Date(now.getFullYear(), now.getMonth(),13,17),
        "allDay": false
    },
    {
        "title": "3 Day Conference",
        start: now.setDate(2),
        end: now.setDate(4),
        "allDay": true
    },
    {
        "title": "Pick up kids",
        start: new Date(now.getFullYear(), now.getMonth(),21, 17),
        end: new Date(now.getFullYear(), now.getMonth(),21,16),
        "allDay": false
    },
    {
        "title": "Visit Parents",
        start: new Date(now.getFullYear(), now.getMonth(),21, 17),
        end: new Date(now.getFullYear(), now.getMonth(),21,16),
        "allDay": false
    },
    {
        "title": "Take Tour of ",
        start: new Date(now.getFullYear(), now.getMonth(),21, 17),
        end: new Date(now.getFullYear(), now.getMonth(),21,16),
        "allDay": false
    },
    {
        "title": "Vacation",
        start: new Date(now.getFullYear(), now.getMonth()+1,21, 17),
        end: new Date(now.getFullYear(), now.getMonth()+1,22,16),
        "allDay": false
    }
]