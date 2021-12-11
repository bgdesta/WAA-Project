//package edu.miu.WAAminimarket.service;
//
//import edu.miu.WAAminimarket.domain.Student;
//import edu.miu.WAAminimarket.repository.StudentRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class StudentServiceImpl implements StudentService{
//    StudentRepository studentRepo;
//
//    @Autowired
//    public StudentServiceImpl(StudentRepository studentRepo){
//        this.studentRepo = studentRepo;
//    }
//
//    @Override
//    public List<Student> findAll() {
//
//        return (List<Student>) studentRepo.findAll();
//    }
//
//    @Override
//    public Student save(Student stud) {
//
//        return studentRepo.save(stud);
//    }
//
//    @Override
//    public Student updateStudent(Long id, Student stud) {
//        Student u = studentRepo.findById(id).get();
//        u.setCgpa(stud.getCgpa());
//        return studentRepo.save(u);
//    }
//
//    @Override
//    public void deleteById(Long id){
//        studentRepo.deleteById(id);
//    }
//}
