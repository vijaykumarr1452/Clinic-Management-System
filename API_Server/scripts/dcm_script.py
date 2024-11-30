# pip install opencv-python pydicom Pillow  

import pydicom
import cv2 
import json
import os
import sys
from pathlib import Path

from datetime import datetime


def createImage(img, file_path):
    obs_file_path = os.path.abspath(file_path)
    folder_path = os.path.dirname(obs_file_path)
    file_name = Path(file_path).stem
    filename_output = f"{folder_path}\{file_name}.jpeg"
    img_date = cv2.cvtColor(img, cv2.COLOR_LAB2BGR)
    cv2.imwrite(filename_output, img_date)
    ot = {
        'dcmType': 'image',
        'filePath': filename_output
    }
    print(json.dumps(ot))


def createVideo(imgs, height, width , file_path):
    obs_file_path = os.path.abspath(file_path)
    folder_path = os.path.dirname(obs_file_path)
    file_name = Path(file_path).stem
    filename_output = f"{folder_path}\{file_name}.mp4"
    fourcc = cv2.VideoWriter_fourcc(*'mpv4')
    video = cv2.VideoWriter(filename_output, fourcc, 15, (width, height))
    for img in imgs:
        img_date = cv2.cvtColor(img, cv2.COLOR_LAB2BGR)
        video.write(img_date)
    cv2.destroyAllWindows()
    video.release()
    ot = {
        'dcmType': 'video',
        'filePath': filename_output
    }
    print(json.dumps(ot))


def checkItemTypeList(item):
    if(item['0040A010']['Value'][0] == 'CONTAINS'):
        return True
    else:
        return False


def getkey(item):
    return item['0040A043']['Value'][0]['00080104']['Value'][0]


def getValue(item):
    a1 = item['0040A168']['Value'][0]['00080104']['Value'][0]
    a2 = item['0040A168']['Value'][0]['00080100']['Value'][0]
    a3 = item['0040A168']['Value'][0]['00080102']['Value'][0]
    return f'{a1}'


def getDataValue(item):
    uom = item['0040A300']['Value'][0]['004008EA']['Value'][0]['00080100']['Value'][0]
    value = item['0040A300']['Value'][0]['0040A30A']['Value'][0]
    return f'{value} {uom} '


def getListData(item):
    lists = []
    for data in item['0040A730']['Value']:
        lists.append(getItemData(data))
    return lists


def getIdentifier(item):
    if(item['0040A010']['Value'][0] == 'HAS CONCEPT MOD'):
        return 'Concept Modifier'
    elif(item['0040A010']['Value'][0] == 'HAS PROPERTIES'):
        return 'Properties'
    elif(item['0040A010']['Value'][0] == 'HAS ACQ CONTEXT'):
        return 'Acquisition Context'
    else:
        return None


def getItemData(item):
    obj = {}
    object_type = checkItemTypeList(item)
    if object_type:
        obj['header'] = getkey(item)
        obj['value'] = getDataValue(item)
        obj['List'] = getListData(item)
    else:
        obj['header'] = getkey(item)
        obj['value'] = getValue(item)
        obj['indentifier'] = getIdentifier(item)
        pass

    return obj


def getFindings(findings_array):
    findings = []

    for i, item in enumerate(findings_array, start=0):
        finding = {}
        item_data = item['0040A730']['Value']

        a1 = item_data[0]['0040A168']['Value'][0]['00080104']['Value'][0]
        a2 = item_data[0]['0040A168']['Value'][0]['00080100']['Value'][0]
        a3 = item_data[0]['0040A168']['Value'][0]['00080102']['Value'][0]

        finding['finding_site'] = f'{a1} ({a2},{a3})'
        finding['finding_site_indentifier'] = getIdentifier(item_data[0])

        finding_data = item_data[1]['0040A730']['Value']

        b1 = finding_data[0]['0040A168']['Value'][0]['00080104']['Value'][0]
        b2 = finding_data[0]['0040A168']['Value'][0]['00080100']['Value'][0]
        b3 = finding_data[0]['0040A168']['Value'][0]['00080102']['Value'][0]

        finding['image_mode'] = f'{b1}'
        finding['image_mode_indentifier'] = getIdentifier(finding_data[0])
        finding_list = []

        finding_data.pop(0)
        for find_item in finding_data:
            finding_list.append(getItemData(find_item))
        finding['finding_data'] = finding_list
        findings.append(finding)

    return findings


def getPatientData(output, patient):
    patient['patient_name'] = (
        output['00100010']['Value'][0]['Alphabetic']).replace("^", " ")
    patient['patient_sex'] = output['00100040']['Value'][0]
    patient['patient_dob'] = datetime.strptime(
        output['00100030']['Value'][0], '%Y%m%d').strftime('%Y-%m-%d')
    patient['patient_id'] = output['00100020']['Value'][0]
    patient['patient_size'] = output['00101020']['Value'][0]
    patient['patient_weight'] = output['00101030']['Value'][0]
    patient['manufacturer'] = f"{output['00080070']['Value'][0]} ({output['00081090']['Value'][0]})"
    patient['completion_flag'] = f"{output['0040A491']['Value'][0]}"
    patient['Verification_flag'] = f"{output['0040A493']['Value'][0]}"
    patient['content_date_time'] = datetime.strptime(
        f"{output['00080023']['Value'][0]} {output['00080033']['Value'][0]}", '%Y%m%d %H%M%S').strftime('%Y-%m-%d %H:%M:%S')
    patient['report_name'] = output['0040A043']['Value'][0]['00080104']['Value'][0]
    patient['institution_name '] = output['00080080']['Value'][0]

    return patient


def readDataDicom(file_path):
    ds = pydicom.dcmread(file_path)
    output = ds.to_json_dict()
    ot = {
        'dcmType': 'data'
    }
    ot = getPatientData(output, ot)
    findings = getFindings(output['0040A730']['Value'])
    ot['findings'] = findings
    print(json.dumps(ot))


def readFileDicom(file_path):
    ds = pydicom.dcmread(file_path)
    pixel_data = ds.pixel_array
    if len(pixel_data.shape) == 3:
        createImage(pixel_data , file_path)
    if len(pixel_data.shape) == 4:
        frame, height, width, layers = pixel_data.shape
        createVideo(pixel_data, height, width,file_path)


def readDicom(file_path):
    ds = pydicom.dcmread(file_path)
    output = ds.to_json_dict()
    if '0040A730' in output:
        readDataDicom(file_path)
    else:
        readFileDicom(file_path)



readDicom(sys.argv[1])
