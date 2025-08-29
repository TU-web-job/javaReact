package react.Diary.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.format.annotation.DateTimeFormat;
import java.util.List;
import java.time.LocalDate;
import react.Diary.entity.DiaryEntity;
import react.Diary.repository.DiaryRepository;

@RestController
@RequestMapping("/api/diary")
@CrossOrigin(origins = "*")
public class DiaryController {

    private final DiaryRepository repo;

    public DiaryController(DiaryRepository repo){
        this.repo = repo;
    }

    @GetMapping
    public List<DiaryEntity> getByDate(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date){
        return repo.findByDate(date.toString());
    }

    @PostMapping
    public DiaryEntity create(@RequestBody DiaryEntity diary){
        return repo.save(diary);
    }
}
