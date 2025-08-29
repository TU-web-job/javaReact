package react.Diary.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "diary")
public class DiaryEntity {
    @Id
    private int diaryId;
    private String title;
    private String text;
    private String image;
    private String date;
}