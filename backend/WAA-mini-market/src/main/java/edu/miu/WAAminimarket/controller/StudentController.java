//package edu.miu.WAAminimarket.controller;
//
//import edu.miu.WAAminimarket.domain.Student;
//import edu.miu.WAAminimarket.service.StudentService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/students")
//@CrossOrigin(origins = "*", allowedHeaders = "*")
//public class StudentController {
//    @Autowired
//    private StudentService studentService;
//
//    @GetMapping
//    public List<Student> getAll(){
//        return studentService.findAll();
//    }
//
//    // Register a new student
//    @PostMapping
//    public Student registerStudent(@RequestBody Student stud){
//        return studentService.save(stud);
//    }
//
//    // Update Student data
//    @PutMapping("/{id}")
//    public Student updateStudentInfo(@PathVariable Long id, @RequestBody Student stud){
//        return studentService.updateStudent(id, stud);
//    }
//
//    // Delete Student
//    @DeleteMapping("/{id}")
//    public void deleteStudent(@PathVariable Long id){
//        studentService.deleteById(id);
//    }
//
//}
