
const readline = require('readline')
const Introduction = ['Introduction to Docker', 'Features of Docker', 'Docker Architecture', 'Docker Hub', 'Docker Cloud']


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const docker = {
    docker_image : 'Docker image là một tập hợp các tệp tin và thư viện bao gồm tất cả những gì cần thiết để thực thi ứng dụng trong môi trường Docker. Nó được sử dụng để tạo ra các container Docker, là một phần cơ bản của hệ thống Docker.  Một Docker image bao gồm tất cả các thành phần cần thiết để chạy một ứng dụng, bao gồm các tệp tin mã nguồn, thư viện phụ thuộc và cấu hình ứng dụng. Image được xây dựng từ một file Dockerfile, đóng gói tất cả các thành phần cần thiết để ứng dụng có thể chạy một cách độc lập.  Image được lưu trữ trong Docker Registry, một kho lưu trữ tập trung chứa các image của các ứng dụng, giúp các nhà phát triển có thể dễ dàng chia sẻ và tái sử dụng các image. Docker Hub là một trong những Docker Registry nổi tiếng nhất.  Khi một container được tạo ra từ một Docker image, container sẽ chứa một bản sao chỉ đọc của image đó. Container có thể được khởi động và thực thi trong môi trường Docker, cung cấp một môi trường độc lập để chạy ứng dụng mà không ảnh hưởng đến môi trường máy chủ.  Docker image là một công cụ quan trọng trong việc triển khai ứng dụng trong môi trường Docker, giúp đơn giản hóa quá trình triển khai và chạy các ứng dụng trên nhiều nền tảng khác nhau.'
}

rl.question('What is your name? ', (name) => {
    console.log(`Hello, ${name}!`)
    askQuestion(name)
})
const askQuestion = (name) => {
    rl.question('Topic : ', (name1) => {
        if (name1 === 'exit') {
            console.log('Pi pi ' + name);
            rl.close()
        } else if (name1 === 'docker') {
            console.log('Hi ' + name)
            console.log('This is : |' + Introduction +"|")
            rl.question('Let choose a option  => ' , (option) => {
                console.log('explain  :  | ' + docker[`${option}`]);
                askQuestion(name)
            })
        }
        else {
            askQuestion(name)
        }

    })

}
