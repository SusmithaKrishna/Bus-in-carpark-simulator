package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class BusInCarPark {

    public BusInCarPark(WebDriver driver){
        PageFactory.initElements(driver, this);
    }
    public String xAxis, yAxis, face, newXAxis, newYAxis, newFace;

    @FindBy(id = "positionX")
    public WebElement xPosition;

    @FindBy(id = "positionY")
    public WebElement yPosition;

    @FindBy(id = "face")
    public WebElement faceDirection;

    @FindBy(id = "move")
    public WebElement moveStep;

    @FindBy(id = "rotate-left")
    public WebElement rotateToLeft;

    @FindBy(id = "rotate-right")
    public WebElement rotateToRight;

    @FindBy(id = "report")
    public WebElement reportButton;

    @FindBy(xpath = "//div[@class='alert alert-success text-center']")
    public WebElement reportResult;

    @FindBy(xpath = "//div[@class='alert alert-danger text-center']")
    public WebElement reportError;

    @FindBy(xpath = "//button[contains(.,'Place bus')]")
    public  WebElement placeBusButton;
    @FindBy(xpath = "//strong[contains(.,'X')]")
    public  WebElement xInResult;
    @FindBy(xpath = "//strong[contains(.,'Y')]")
    public  WebElement yInResult;
    @FindBy(xpath = "//button[contains(.,'Place bus')]")
    public  WebElement faceInResult;

    public void defineBusPositipon(String xAxis, String yAxis, String face){
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        this.face = face;
        Select dropdownX = new Select(xPosition);
        Select dropdownY = new Select(yPosition);
        Select dropdownFace = new Select(faceDirection);
        xPosition.click();
        dropdownX.selectByValue(xAxis);
        yPosition.click();
        dropdownY.selectByValue(yAxis);
        faceDirection.click();
        dropdownFace.selectByValue(face);
    }
    public void clickPlaceButton(){
        placeBusButton.click();
    }
    public void clickReportButton(){
        reportButton.click();
    }
    public void clickRotateToRight(){
        rotateToRight.click();
    }
    public void clickRotateToLeft(){
        rotateToLeft.click();
    }
    public void clickMove(){
        moveStep.click();
    }
}
