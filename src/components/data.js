const now =  new Date()
now.getDay();

export var Data = [
    {
        "title": "Event 1",
        start: new Date(now.getFullYear(), now.getMonth(),13, 7),
        end: new Date(now.getFullYear(), now.getMonth(),13,17),
        "allDay": false
    },
    {
        "title": "Event 2",
        start: now.setDate(2),
        end: now.setDate(4),
        "allDay": true
    },
    {
        "title": "Event 3",
        start: new Date(now.getFullYear(), now.getMonth(),21, 17),
        end: new Date(now.getFullYear(), now.getMonth(),21,16),
        "allDay": false
    },
    {
        "title": "Event 4",
        start: new Date(now.getFullYear(), now.getMonth(),21, 17),
        end: new Date(now.getFullYear(), now.getMonth(),21,16),
        "allDay": false
    },
    {
        "title": "Event 5",
        start: new Date(now.getFullYear(), now.getMonth(),21, 17),
        end: new Date(now.getFullYear(), now.getMonth(),21,16),
        "allDay": false
    },
    {
        "title": "Event 6",
        start: new Date(now.getFullYear(), now.getMonth()+1,21, 17),
        end: new Date(now.getFullYear(), now.getMonth()+1,22,16),
        "allDay": false
    }
]