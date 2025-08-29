package controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/diary")
@CrossOrigin(origins = "*")
public class DiaryController {

    private final DiaryRepository repo;

    public DiaryController(DiaryRepostitory repo){
        this.repo = repo;
    }

    @GetMapping
    public List<Diary> getByDate(@RequestParam String date){
        return repo.findByDate(date);
    }

    @PostMapping
    public Diary create(@RequestBody Diary diary){
        return repo.save(diary);
    }
}
