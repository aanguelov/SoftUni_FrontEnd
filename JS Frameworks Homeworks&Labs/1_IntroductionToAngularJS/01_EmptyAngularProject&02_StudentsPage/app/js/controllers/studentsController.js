app.controller('StudentsController', function($scope) {
    $scope.students = [
        {
            "name": "Nakov",
            "photo": "https://softuni.bg/users/profile/showavatar/f04101a2-0ae3-46a2-8f4d-057de2fd4e69",
            "grade": 2,
            "school": "High School of Mathematics",
            "teacher": "Gichka Pesheva",
            "value": true
        },

        {
            "name": "Bogi",
            "photo": "https://softuni.bg/users/profile/showavatar/86088669-f986-4533-b443-3b2502b61b77",
            "grade": 6,
            "school": "JavaScript Applications",
            "teacher": "TheGodOfJavaScript",
            "value": true
        },

        {
            "name": "Angel",
            "photo": "https://softuni.bg/users/profile/showavatar/bb78d9c2-8aac-42d7-a9ca-6f8e7e8f6f54",
            "grade": 4,
            "school": "SoftUni",
            "teacher": "Yordan Darakchiev",
            "value": true
        }
    ];
});