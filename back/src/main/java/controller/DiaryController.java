package controller;

@RestController
@RequestMapping("/api/diary")
@Crossorigin(origins = "*")
public class DiaryController {

    private final DiaryRepository repo;

    public DiaryController(DiaryRepostitory repo){
        this.repo = repo;
    }

    @GetMapping
    public List<Diary> getByDate(@RequstParam String date){
        return repo.findByDate(date);
    }

    @PostMapping
    public Diary create(@RequestBody Diary diary){
        return repo.save(diary);
    }
}
