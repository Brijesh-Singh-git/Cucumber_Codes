package Step_Definations;

import org.junit.runner.RunWith;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features="G:\\INFOSYS Lectures & Codes\\CUCUMBER CODES"
		+ "\\Cucumber_Codes\\src\\test\\resources\\Features",strict=true, 
		glue= {"Step_Definations"}, monochrome=true,
		plugin={"pretty","html:target/HtmlReports","json:target/JSONReports/report.json",
				"junit:target/JUnitReports/report.xml"},
		tags="@smoketest")

public class Runner {
	
}


