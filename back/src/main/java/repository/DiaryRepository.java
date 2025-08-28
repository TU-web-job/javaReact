import org.springframework.data.mongodb.repository.MongoRepository;

public interface DiaryRepository extends MongoRepository<Diary, String> {
    List<Diary> findByDate(String date);
}