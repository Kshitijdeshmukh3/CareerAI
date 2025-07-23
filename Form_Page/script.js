// Initialize Angular application
angular.module('careerAiApp', ['ngAnimate'])
.controller('RegistrationController', ['$scope', '$http', function($scope, $http) {
    // Initialize student data model
    $scope.student = {
        fullName: '',
        email: '',
        phone: '',
        educationLevel: '',
        fieldOfStudy: '',
        skills: '',
        interests: '',
        careerGoals: ''
    };

    $scope.submissionSuccess = false;
    $scope.submissionError = '';

    // Function to handle form submission
    $scope.submitForm = function() {
        if ($scope.registrationForm.$valid) {
            console.log("Form is valid. Submitting data:", $scope.student);

            // In a real application, you would send this data to your backend API
            // For demonstration, we'll simulate an API call.

            // Replace with your actual backend API endpoint
            const backendApiUrl = 'YOUR_BACKEND_API_ENDPOINT_FOR_CAREER_PATH_GENERATION';

            // Simulate an HTTP POST request
            // $http.post(backendApiUrl, $scope.student)
            //     .then(function(response) {
            //         console.log('Backend response:', response.data);
            //         $scope.submissionSuccess = true;
            //         $scope.submissionError = '';
            //         // Optionally, redirect or display career path
            //     })
            //     .catch(function(error) {
            //         console.error('Error submitting form:', error);
            //         $scope.submissionError = 'Failed to process your request. Please try again later.';
            //         $scope.submissionSuccess = false;
            //     });

            // --- Mocking API call for frontend demonstration ---
            // Remove this block when integrating with a real backend
            $scope.submissionError = ''; // Clear previous errors
            $scope.submissionSuccess = false; // Reset success state

            // Simulate network delay
            setTimeout(() => {
                const success = Math.random() > 0.1; // 90% chance of success
                if (success) {
                    $scope.$apply(function() {
                        $scope.submissionSuccess = true;
                        console.log("Mock API success!");
                        // You could imagine a response here with career path data
                        // For instance: response.data.careerPath = ["Data Scientist", "ML Engineer"];
                    });
                } else {
                    $scope.$apply(function() {
                        $scope.submissionError = 'A simulated error occurred. Please try again.';
                        console.error("Mock API error!");
                    });
                }
            }, 1500); // Simulate 1.5 second delay
            // --- End of Mocking Block ---

        } else {
            // Form is invalid, Angular's ng-show will display validation messages
            console.log("Form is invalid. Please fill all required fields.");
            // Touch all fields to show validation messages immediately if not already touched
            angular.forEach($scope.registrationForm.$error.required, function(field) {
                field.$setTouched();
            });
        }
    };
}]);