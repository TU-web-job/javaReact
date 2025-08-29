package controller;

import org.springframework.web.bind.annotation.*;
import org.springfreamework.format.annotation.DateTimeFormat;
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
    public List<Diary> getByDate(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date){
        return repo.findByDate(date.toString());
    }

    @PostMapping
    public Diary create(@RequestBody Diary diary){
        return repo.save(diary);
    }
}
