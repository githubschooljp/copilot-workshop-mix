package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CalcController {
    @GetMapping("/addForm")
    public String addForm() {
        return "addForm";
    }

    @PostMapping("/add")
    public String add(@RequestParam("a") int a, @RequestParam("b") int b, Model model) {
        int result = a + b;
        model.addAttribute("result", result);
        return "addForm";
    }
}

// Rest Controller Version
/*
@RestController
public class CalcController {
    //パラメーター2個を受け取り、その合計を返す
    @GetMapping("/add")
    public int add(int a, int b) {
        return a + b;
    }
}
*/