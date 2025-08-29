package react.Diary.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import react.Diary.entity.DiaryEntity;
import java.util.List;

public interface DiaryRepository extends MongoRepository<DiaryEntity, String> {
    List<DiaryEntity> findByDate(String date);
}